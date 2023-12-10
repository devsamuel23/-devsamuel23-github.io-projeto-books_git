import Input from "../Input";
import styled from "styled-components";
import React, { useState } from "react";
import { Livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, ##002f52 35%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36pxpx;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Resultado = styled.div`
  display:flex;
  justify-content:center;
  align-items; center;
  margin-bottom; 20px;
  cursor: pointer;

  p{
    width: 200px;

  }
  img{
    width: 100px;

  }
  &:hover{
    border: 1px solid white;
  }

`

const Pesquisa = () => {
  const [livrosDigitado, setlivrosDigitado] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro na sua estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          setlivrosDigitado((livrosAnteriores) =>
            Livros.filter((livro) => livro.nome.includes(textoDigitado))
          );
        }}
      />
      <Resultado>
        {livrosDigitado.map((livro) => (
          <div>
            <img src={livro.src} alt="Descrição dos livros" />
            <p>{livro.nome}</p>
          </div>
        ))}
      </Resultado>
    </PesquisaContainer>
  );
};

export default Pesquisa;
