import { Button, ITextProps } from "native-base"

import React from 'react'

interface BotaoProps extends ITextProps {
  children: string
}


export function Botao({ children, ...rest }: BotaoProps) {
  return (

    <Button w="100%"
      bg="blue.800"
      mt={10}
      borderRadius="lg"
      {...rest}
    >
      Entrar
    </Button>

  )
}
