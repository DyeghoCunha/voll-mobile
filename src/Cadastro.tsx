import { VStack, Image, Text, Box, FormControl, Input, Button, Link, } from "native-base"
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png"
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useState } from "react"

export default function Cadastro() {

  const [numSecao, setNumSecao] = useState(0)

  const secoes = [

    {
      id: 1,
      titulo: "Insira alguns dados básicos",
      entradaTexto: [
        {
          id: 1,
          label: "Nome",
          type: "text",
          placehoder: "Digite seu nome complesto"
        },
        {
          id: 2,
          type: "text",
          label: "Email",
          placehoder: "Digite seu Email"
        }
      ]
    },
    {
      id: 2,
      titulo: "Agora, mais alguns dados sobre você",
      entradaTexto: [
        {
          id: 1,
          label: "CEP",
          type: "text",
          placehoder: "Digite seu CEP"

        }
      ]
    }
  ]

  function avancarSecao() {
    setNumSecao(numSecao + 1)
  }

  return (

    <VStack flex={1} bgColor="#fff" alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo> {secoes[numSecao].titulo} </Titulo>

      <Box>
        {secoes[numSecao].entradaTexto.map(entrada => {
          return <EntradaTexto key={entrada.id} type={entrada.type} label={entrada.label} placeholder={entrada.placehoder} />
        })}

      </Box>

      <Botao onPress={() => avancarSecao()}>Avançar</Botao>


    </VStack>
  );
}


