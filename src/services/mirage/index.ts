import { createServer, Factory, Model } from "miragejs";
import faker from "faker";


type User = {
  name: string;
  email: string;
  created_at: string;
};

export function startMirage() {

  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

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
      server.createList("user", 10);
    },

    routes() {
      // qual rota deve iniciar no caso api/users
      this.namespace = 'api'
      // tempo de resposta para o servidor
      this.timing = 750;

      // rotas de atalhos, o miragejs ja entende que se nao passsar nenhum valor
      // deve criar o crud basico
      this.get("/users");
      this.post("/users")

      // para nao dar conflito com api routes do next
      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
