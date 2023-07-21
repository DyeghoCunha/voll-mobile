import { VStack, Image, Box, Checkbox, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useState } from "react";

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

  const secoes = [
    {
      id: 1,
      titulo: "Insira alguns dados básicos",
      entradaTexto: [
        {
          id: 1,
          label: "Nome",
          type: "text",
          placeholder: "Digite seu nome completo",
        },
        {
          id: 2,
          type: "text",
          label: "Email",
          placeholder: "Digite seu Email",
        },
           {
          id: 3,
          type: "text",
          label: "Email",
          placeholder: "Digite seu Email",
        },
           {
          id: 4,
          type: "text",
          label: "Email",
          placeholder: "Digite seu Email",
        },
           {
          id: 5,
          type: "text",
          label: "Email",
          placeholder: "Digite seu Email",
        },

           {
          id: 6,
          type: "text",
          label: "Email",
          placeholder: "Digite seu Email",
        },
           {
          id: 7,
          type: "text",
          label: "Email",
          placeholder: "Digite seu Email",
        },
           {
          id: 8,
          type: "text",
          label: "Email",
          placeholder: "Digite seu Email",
        },
           {
          id: 9,
          type: "text",
          label: "Email",
          placeholder: "Digite seu Email",
        },
      ],
    checkbox: []
    },
    {
      id: 2,
      titulo: "Agora, mais alguns dados sobre você",
      entradaTexto: [
        {
          id: 1,
          label: "CEP",
          type: "text",
          placeholder: "Digite seu CEP",
        },
      ],
    checkbox: []
    },
    {
      id: 3,
      titulo: "Para finalizar, quais são os seus planos de saúde?",
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: "Sulamerica"
        },
        {
          id: 2,
          value: "Amil"
        }
      ]
    }
  ];

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
    <VStack flex={1} bgColor="#fff" alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

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

      <Botao onPress={() => avancarSecao()} mt={4}>
        Avançar
      </Botao>
    </VStack>
  );
}
