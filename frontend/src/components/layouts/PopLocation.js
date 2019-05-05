import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import styled from "styled-components";
import bangkok from "../../img/bangkok1.jpg";
import nonthaburi from "../../img/nonthaburi.jpg";
import phuket from "../../img/phuket.jpg";
import chonburi from "../../img/chonburi.jpg";
import chiangmai from "../../img/chiangmai.jpg";
import huahin from "../../img/huahin.jpg";

const Wrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: ${props => props.theme.colorGreyLight};
`;

const H2 = styled.h2`
  margin-bottom: 3rem;
  text-align: center;
  color: ${props => props.theme.colorPrimary};
`;

const StyledFigure = styled(Figure)`
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
`;

const StyledFigureImg = styled(Figure.Image)`
  width: 100%;
  object-fit: cover;
  display: block;
  border-radius: 6px;
  filter: brightness(70%);
  height: 18rem;
`;

const StyledFigureImg2 = styled(StyledFigureImg)`
  height: 14rem;
`;

const StyledFigureCaption = styled(Figure.Caption)`
  color: ${props => props.theme.colorWhite}
  text-transform: uppercase;
  font-size: 1.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const City = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <H2>ทำเลยอดนิยม</H2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={7} lg={8}>
            <StyledFigure>
              <StyledFigureImg alt="bangkok" src={bangkok} />
              <StyledFigureCaption>ทองหล่อ</StyledFigureCaption>
            </StyledFigure>
          </Col>
          <Col xs={12} sm={5} lg={4}>
            <StyledFigure>
              <StyledFigureImg alt="nonthaburi" src={nonthaburi} />
              <StyledFigureCaption>เอกมัย</StyledFigureCaption>
            </StyledFigure>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <StyledFigure>
              <StyledFigureImg2 alt="chiangmai" src={chiangmai} />
              <StyledFigureCaption>พร้อมพงษ์</StyledFigureCaption>
            </StyledFigure>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <StyledFigure>
              <StyledFigureImg2 alt="chonburi" src={chonburi} />
              <StyledFigureCaption>ราชเทวี</StyledFigureCaption>
            </StyledFigure>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <StyledFigure>
              <StyledFigureImg2 alt="huahin" src={huahin} />
              <StyledFigureCaption>ห้วยขวาง</StyledFigureCaption>
            </StyledFigure>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <StyledFigure>
              <StyledFigureImg2 alt="phuket" src={phuket} />
              <StyledFigureCaption>สาทร</StyledFigureCaption>
            </StyledFigure>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default City;
