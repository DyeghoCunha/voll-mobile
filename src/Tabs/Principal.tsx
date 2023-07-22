import { Text, VStack, ScrollView, Avatar, Divider, Box, Image } from 'native-base'
import React from 'react'
import { Titulo } from '../componentes/Titulo'
import { EntradaTexto } from '../componentes/EntradaTexto'
import { Botao } from '../componentes/Botao'
import Logo from "../assets/Logo.png"

export default function Principal() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems={"center"} p={5}>
        <Box w={"100%"}  >
          <Image source={Logo} alt="Logo Voll" />
          <Titulo color={"blue.500"}>Boas Vindas!</Titulo>
        </Box>
        <Box flex={1} w={"100%"} mt={10} shadow={1} borderColor={"black"} p={5}>
          <EntradaTexto mt={0} type='text' label="" placeholder='Digite a Especialidade' />
          <EntradaTexto type='text' label="" placeholder='Digite sua localização' />
          <Botao flex={1} >Buscar</Botao>
        </Box>

        <Titulo color={"blue.500"}>
          Informações pessoais
        </Titulo>
        <Titulo fontSize={"lg"} mb={1}>
          Dyegho Cunha
        </Titulo>
        <Text>
          25/03/1987
        </Text>
        <Text>
          Balneário Camboriú - Sc
        </Text>
        <Divider mt={5} />
        <Titulo color={"blue.500"} mb={1}>
          Histórico Médico
        </Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  )
}
