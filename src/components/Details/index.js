import React, { Component } from "react";

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText
} from "./styles";

import uberx from "../../assets/uberx.png";

export default class Details extends Component {

render() {
    return (
      <Container>
        <TypeTitle>ENDEREÇO MAIS PRÓXIMO</TypeTitle>
        <TypeDescription>Está setado com a rota na cor</TypeDescription>

        <TypeImage source={uberx} />
        <TypeTitle>[Endereço mais próximo]</TypeTitle>
        <TypeDescription>[LABEL COM A COR]</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>INICIAR CORRIDA</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
     
