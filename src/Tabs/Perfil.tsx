import { Text, VStack, ScrollView, Avatar, Divider } from 'native-base'
import React from 'react'
import { Titulo } from '../componentes/Titulo'

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems={"center"} p={5}>
        <Titulo color={"blue.500"}>Meu Perfil</Titulo>
        <Avatar source={{ uri: "https://github.com/DyeghoCunha.png" }} mt={5} size={"xl"} />

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
