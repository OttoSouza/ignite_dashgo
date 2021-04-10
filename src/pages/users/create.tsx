import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  Button,
  HStack,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Sidebar } from "../../components/SideBar";

import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = Yup.object().shape({
  name: Yup.string().required("Nome obrigagorio"),
  email: Yup.string().required("E-mail obrigatorio").email("E-mail invalido"),
  password: Yup.string()
    .required("Senha obrigatoria")
    .min(6, "No minimo 6 caracteres "),
  password_confirmation: Yup.string().oneOf(
    [null, Yup.ref("password")],
    "As senhas precisam ser iguais"
  ),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Header />

      <Flex width="100%" maxWidth={1480} mx="auto" px="6" my="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuario
          </Heading>

          <Divider borderColor="gray.700" my="6" />
          <VStack spacing="8">
            <SimpleGrid width="100%" spacing={["6", "8"]} minChildWidth="240px">
              <Input
                name="name"
                label="Nome completo"
                type="text"
                error={formState.errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                error={formState.errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid width="100%" spacing={["6", "8"]} minChildWidth="240px">
              <Input
                name="password"
                label="Senha"
                type="password"
                error={formState.errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                label="Confirmar senha"
                type="password"
                error={formState.errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
