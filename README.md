<div align="center">
  
# Alura - Formação - Desenvolva aplicações Web e Mobile com React e React Native

## O que foi Proposto
  
Formação com a junção de React e React Native para aprender a lidar com mais de uma plataforma no desenvolvimento de um produto tanto mobile quanto desktop, diversificando o conhecimento em React com Typescript.

Benefícios desta formação:

* Dominar as principais bibliotecas e frameworks utilizados no mercado, como React, React Native, TypeScript, Native-base, MUI;
* Utilizar o Figma para consultar o design e protótipos da aplicação;
* Aprender a realizar requisições a APIs e gerenciar estados com Axios, Fetch e MobX;
* Implementar rotas privadas e navegação eficiente com o React Router Dom;
* Criar gráficos atraentes com a biblioteca Recharts.
* Criar aplicações mobile e web de alta qualidade e desempenho.


## O que eu fiz






| :placard: Vitrine.Dev |  [Minha Vitrine Dev](https://cursos.alura.com.br/vitrinedev/dyeghocunha)   |
| -------------  | --- |
| :sparkles: Nome        | **Voll-Mobile**
| :label: Tecnologias |   <img src="https://img.shields.io/badge/reactnative-5CE1E6?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/typeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/firebase-FEC927?style=for-the-badge&logo=firebase&logoColor=white"><img src="https://img.shields.io/badge/Expo-4630EB?style=for-the-badge&logo=expo&logoColor=white">
| 🎇: Bibliotecas | [Vanilla-Tilt](https://cdnjs.com/libraries/vanilla-tilt),[EXPO](https://expo.dev/)[Native-Base](https://nativebase.io/),
| :rocket: URL         | [Projeto]()
<!-- | :fire: Desafio     | [Conheça o Challenge Alura] -->
<!-- | :laughing: Upgrades que fiz     | **Foi alterado todo o conceito da proposta, mantendo os desafios do Challange...fiz igual, mas diferente** -->
  
</div>

# 💪 Sobre o Challenge da Alura

Esse é um desafio proposto por Alura maior escola de tecnologia do Brasil, onde recebemos um layout no figma completo e temos o desafio de fazer esse site por nossa conta em **4 semanas** como tempo proposto.

Com incentivo de usarmos a comunidade do Discord como apoio são esses nossos colegas do Desafio. *Mas é uma comundiade exclusiva para alunos por isso não posso deixar o link!*


Também temos nossos instrutores que estão nos desafiando e auxiliando durante esse período que organizam cursos e conteudos para cada semana tanto na plataforma da alura quanto no trello.

<img src="https://github.com/DyeghoCunha/what_the_fox/blob/master/public/desafiantes2.png?raw=true" alt="banner dos instrutores">

Recebemos na plataforma do **Trello** um guia para semana com tarefas para serem feitas onde podemos visualizar melhor cada etapa desse Desafio e conferir nosso progresso! 

<img src="https://github.com/DyeghoCunha/what_the_fox/blob/master/public/trello.png?raw=true" alt="banner do trello">

## Objetivo

Ao final desse desafio teremos esses conteudos prontos:

- Uma página inicial que contenha um buscador de produtos oferecidos pela empresa;
- Um banner/carrossel que contenha informações sobre a coleção do momento;
- Uma galeria com as categorias dos produtos disponíveis na loja;
- Uma galeria com as informações dos produtos, como: imagem, nome do produto, descrição e link que leva até a página de “Saiba mais sobre o produto”.
- Uma modal que contenha a imagem, o nome, a descrição, o preço, as variações do produto e a opção de adicionar na sacola;
- Uma seção para divulgar as facilidades que a loja proporciona para realizar as compras;
- Uma seção para cadastrar na newsletter e receber novidades;
- Um rodapé com informação do site.

# 🎨 Projeto no Figma
Acesse esse projeto aqui [Projeto](https://www.figma.com/file/61CRNXlUmooMttGVa0GvML/React-fullstack---Voll.med?node-id=444%3A5625&mode=dev)


<div align="center">
<img src="https://github.com/DyeghoCunha/voll-mobile/blob/master/public/figma1.png?raw=true" alt="projeto no Figma">
</div>

<div align="center">
<img src="https://github.com/DyeghoCunha/voll-mobile/blob/master/public/figma2.png?raw=true" alt="projeto no Figma">
</div>

# :one: Primeiro Passo | :construction:**Em progresso** <!-- :white_check_mark:**Feito**  -->

Nesse primeiro passo você irá construir um aplicativo mobile completo, utilizando React Native com TypeScript para garantir a qualidade e a segurança do código. Com o auxílio da biblioteca Native-base, você será capaz de criar designs e interfaces de usuário incríveis, proporcionando uma experiência agradável e funcional aos usuários finais, usando como base um Figma do layout do App.

Você também aprenderá a integrar seu aplicativo mobile com uma API externa utilizando Axios, uma biblioteca popular e eficiente para realizar requisições HTTP. Essa integração permitirá a comunicação entre o aplicativo e um servidor, possibilitando a troca de informações e a manipulação de dados em tempo real.



## Curso - React Native: Construindo um App com Native-base 

- :white_check_mark: <!-- :construction: --> Aula 1 | Instalando o expo e o TypeScript 
- <!-- :white_check_mark: --> :construction: Aula 2 | Criando a tela de login
- <!-- :white_check_mark: --> :construction: Aula 3 | Criando tela de cadastro
- <!-- :white_check_mark: --> :construction: Aula 4 | Navegação entre telas
- <!-- :white_check_mark: --> :construction: Aula 5 | Criando telas de home e perfil


## Resultados do Primeiro Passo:

<div align="center">

<!-- ![Meu Projeto na Semana 1](https://github.com/DyeghoCunha/what_the_fox/blob/master/public/wtf%20%E2%80%90%20Feito%20com%20o%20Clipchamp.gif?raw=true) -->


</div>



# 🤯 Minha experiência

## Projeto em Desenvolvimento

### Primeiro Passo

Um destaque da aula 2 para mim, que foi novidade foi a inclusão do {...rest} no seguinte componente 

```
interface TituloProps extends ITextProps {
  children: ReactNode
}

export function Titulo({ children, ...rest }: TituloProps) {
  return (
    <Text fontSize="2xl"
      fontWeight="bold"
      color="gray.500"
      textAlign="center"
      mt={5}
      {...rest}
    >
      {children}
    </Text>
  )
}

```
Nesta parte, são realizados os imports necessários para o funcionamento do componente. O componente Texto é importado do pacote @native-base, que é uma biblioteca de componentes para o React Native com estilos personalizados.

Em seguida, é declarada uma interface chamada TituloProps, que estende as propriedades do componente Texto (ITextProps). A interface possui uma propriedade children, que é do tipo ReactNode. Essa propriedade permitirá que o componente Titulo receba conteúdo filho (children) e exiba dentro do componente Texto.

Aqui é declarado o componente Titulo. Ele é uma função que recebe as propriedades definidas na interface TituloProps como parâmetro.

Dentro do corpo da função, há o retorno do componente Texto , com algumas propriedades configuradas. Essas propriedades definem o estilo do título.

* fontSize: Define o tamanho da fonte como "2xl", que geralmente é um tamanho maior do que o padrão.
* fontWeight: Define o peso da fonte como "bold", tornando o texto em negrito.
* color: Define a cor do texto como "gray.500", que é um tom de cinza. Você pode usar qualquer cor válida do do CSS aqui.
* textAlign: Define o alinhamento do texto como "center", centralizando o título no componente.
* mt: Define uma margem superior de 5 unidades. Você pode ajustar esse valor conforme necessário.

E o que me chamou a atenção foi o spread operator {...rest} para repassar quaisquer outras propriedades personalizadas que possam ser fornecidas ao componente Titulo. Isso permite que você passe propriedades adicionais ao Texto se necessário.








# 🖼️ Sobre o Autor


<div align="center">
<img src="https://github.com/DyeghoCunha/what_the_fox/blob/master/public/vitrinedex.png?raw=true" alt="projeto no Figma">
</div>


<!-- ## ⭐ Representação do projeto em diversas telas
<div align="center">
![Demonstração]()
</div> -->

 # 🖼️ Banner do VitrineDev
<div align="center">
<img src="https://github.com/DyeghoCunha/what_the_fox/blob/master/public/banner%20(6).png?raw=true#vitrinedev" alt="imagem banner do Vitrine Dev">
</div> 

 # 🖼️ Foto do Projeto


<!-- <div align="center">
<img src="https://github.com/DyeghoCunha/what_the_fox/blob/master/public/PaginaInicial_288x882.png?raw=true" alt="imagem do projeto">
</div>  -->

<!-- @media screen and (max-width: 1024px) {
  .cabecalho_container{
background-color: red;
}
}

/* Para smartphones com largura de 375px */
@media screen and (max-width: 767px) {
   .cabecalho_container{
background-color: blue;
}
