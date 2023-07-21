import { VStack, Image, Box, Checkbox, ScrollView, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useState } from "react";
import { secoes } from "./utils/CadastroEntradaTexto"

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);



  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  return (
    <ScrollView flex={1} bgColor="#fff" p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />

      <Titulo> {secoes[numSecao].titulo} </Titulo>

      <Box>
        {secoes[numSecao]?.entradaTexto?.map((entrada) => {
          return (
            <EntradaTexto
              key={entrada.id}
              type={entrada.type}
              label={entrada.label}
              placeholder={entrada.placeholder}
            />
          );
        })}
      </Box>

      <Box> 
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={2}>
          Selecione o campo
        </Text>
        {
          secoes[numSecao]?.checkbox?.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          })
        }
      </Box>

      {numSecao > 0 && (
        <Botao onPress={() => voltarSecao()} bg="gray.400">
          Voltar
        </Botao>
      )}

      <Botao onPress={() => avancarSecao()} mt={4} mb={10}>
        Avançar
      </Botao>
    </ScrollView>
  );
}
