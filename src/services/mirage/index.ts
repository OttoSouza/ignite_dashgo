import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function startMirage() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    // determina como deve interpretar os dados enviado por ele.

    // gerar dados fakes em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      // cria-se uma lista
      // user seria o factory
      // e desejo criar 200 user
      server.createList("user", 200);
    },

    routes() {
      // qual rota deve iniciar no caso api/users
      this.namespace = "api";
      // tempo de resposta para o servidor
      this.timing = 750;

      // rotas de atalhos, o miragejs ja entende que se nao passsar nenhum valor
      // deve criar o crud basico

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);
        // page = 1 | pageStart = 0 * 10 = 0
        // page = 1 | pageStart = 0 + 10 = 10
        // primeira pagina ira comecar 0 e terminar em 10

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(200, { "x-total-count": String(total) }, { users });
      });
      this.post("/users");
      this.get("/users/:id");
      // para nao dar conflito com api routes do next
      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
