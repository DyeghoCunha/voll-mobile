import { VStack, Image, Text, Box, FormControl, Input, Button, Link, } from "native-base"
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png"
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";

export default function Login({ navigation }) {

  return (
    <VStack flex={1} bgColor="#fff" alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo> Faça o Login em sua conta </Titulo>

      <Box>

        <EntradaTexto type="text" titulo="Email" placeholder="Escreva seu endereço de Email" />

        <EntradaTexto placeholder="Escreva sua senha" type="password" titulo="Senha" />
      </Box>

      <Botao onPress={()=> navigation.navigate("Tabs")}>Entrar</Botao>

      <Link mt={2} href="https://www.alura.com.br">
        Esqueceu sua senha?
      </Link>

      <Box
        w="100%"
        flexDirection="row"
        justifyContent="center"
        mt={8}>

        <Text>Ainda não tem Cadastro?</Text>

        <TouchableOpacity onPress={()=> navigation.navigate("Cadastro")}>
          <Text color="blue.500">Faça seu cadastro</Text>
        </TouchableOpacity>

      </Box>
    </VStack>
  );
}


