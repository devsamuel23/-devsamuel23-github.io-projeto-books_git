import React from "react";
import { Livros } from "../UltimosLancamentos/DadosLancamentos";
import { Titulo } from "../Titulo";
import styled from "styled-components";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from '../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width; 100%;
    justify-content: center;
    cursor: pointer;
    
    `;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#EB9B00">
        ULTIMOS LANÇAMENTOS 
      </Titulo>
      <NovosLivrosContainer>
        {Livros.map((Livro) => (
          <img key={Livro.id} src={Livro.src} alt={Livro.nome} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda 
      titulo="Talvez você se interesse por"
      subtitulo="Angular 11"
      descricao="Construindo uma aplicação integrada com o Google"
      img={imagemLivro}/>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
