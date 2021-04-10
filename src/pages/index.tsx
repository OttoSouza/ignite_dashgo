import Head from "next/head";
import {
  Flex,
  Button,
  Stack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaSun, FaMoon } from "react-icons/fa";
type SignInFormData = {
  email: string;
  password: string;
};

const signinFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatorio").email("E-mail invalido"),
  password: yup.string().required("Senha obrigatoria"),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signinFormSchema),
  });

  const handleSign: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        direction="column"
      >
        <IconButton
          aria-label="Theme"
          ml={80}
          mb="4"
          size="md"
          icon={colorMode === 'light' ? <FaMoon/> : <FaSun/>}
          color="whitesmoke"
          bgColor="gray.600"
          isRound={true}
          onClick={toggleColorMode}
        />

        <Flex
          as="form"
          width="100%"
          maxWidth="360px"
          bg="gray.800"
          padding="8"
          borderRadius="8"
          flexDir="column"
          onSubmit={handleSubmit(handleSign)}
        >
          <Stack spacing="4">
            <Input
              name="email"
              label="E-mail"
              type="email"
              error={formState.errors.email}
              {...register("email")}
            />
            <Input
              name="password"
              label="Senha"
              type="password"
              error={formState.errors.password}
              {...register("password")}
            />
          </Stack>
          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
