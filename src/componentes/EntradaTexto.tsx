import { FormControl, Input, ITextProps } from "native-base"
import { ReactNode } from "react"

interface EntradaTextoProps extends ITextProps {
  type: string
  placeholder: string
  label: string
}

import React from 'react'

export function EntradaTexto({ type = "text", placeholder, label , ...rest}: EntradaTextoProps) {

  return (

    <FormControl mt={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        type={type}
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
        {...rest}
      />
    </FormControl>
  )
}
