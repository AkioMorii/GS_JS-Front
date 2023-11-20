import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 20px;
  height: auto;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  display: flex;
  font-size: 20px;
  padding: 10px;
  line-height: 45px;
  margin: 50px;
`;

const PassByInfo = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Nosso produto</Title>
        <Description>
          O HealSphere é uma inovadora solução dedicada a aprimorar a eficiência das filas em hospitais.
          Utilizando tecnologia avançada, reduzimos o tempo de espera dos pacientes, alocamos recursos
          de forma inteligente e proporcionamos uma jornada mais ágil e satisfatória para todos os envolvidos.
          Nosso compromisso é transformar a experiência hospitalar, tornando-a mais eficaz, humana e sem complicações.
        </Description>
      </TextContainer>
    </Container>
  );
};

export default PassByInfo;
