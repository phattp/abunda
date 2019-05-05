import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import room1 from "../../img/room-1.jpg";
import room2 from "../../img/room-2.jpg";
import room3 from "../../img/room-3.jpg";
import room4 from "../../img/room-4.jpg";
import room5 from "../../img/room-5.jpg";
import room6 from "../../img/room-6.jpg";

const Wrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const StyledCardBody = styled(Card.Body)`
  color: ${props => props.theme.colorBlack};
  font-weight: 300;
`;

const CardImg = styled(Card.Img)`
  height: 14rem;
  object-fit: cover;
`;

const StyledRow = styled(Row)`
  margin-bottom: 2rem;
`;

const H2 = styled.h2`
  margin-bottom: 3rem;
  text-align: center;
  color: ${props => props.theme.colorPrimary};
`;

class Recommended extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col>
              <H2>อสังหาริมทรัพย์แนะนำ</H2>
            </Col>
          </Row>
          <StyledRow>
            <Col xs={12} sm={6} md={4}>
              <Card border="light">
                <CardImg variant="top" src={room1} />
                <StyledCardBody>
                  <Card.Title>สว่างเพลส</Card.Title>
                  <Card.Text>โชคชัย 4 ลาดพร้าว กรุงเทพมหานคร</Card.Text>
                </StyledCardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card border="light">
                <CardImg variant="top" src={room2} />
                <StyledCardBody>
                  <Card.Title>ภัทร อพาร์ทเม้นท์</Card.Title>
                  <Card.Text>มักกะสัน ราชเทวี กรุงเทพมหานคร</Card.Text>
                </StyledCardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card border="light">
                <CardImg variant="top" src={room3} />
                <StyledCardBody>
                  <Card.Title>หอพักสตรีนลินภัทร</Card.Title>
                  <Card.Text>รามคำแหง 47 หัวหมาก กรุงเทพมหานคร</Card.Text>
                </StyledCardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card border="light">
                <CardImg variant="top" src={room4} />
                <StyledCardBody>
                  <Card.Title>เคทเพลท</Card.Title>
                  <Card.Text>สุขุมวิท 33 วัฒนา กรุงเทพมหานคร</Card.Text>
                </StyledCardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card border="light">
                <CardImg variant="top" src={room5} />
                <StyledCardBody>
                  <Card.Title>ก๊อดจิ อพาร์ทเม้นท์</Card.Title>
                  <Card.Text>พัฒนาการ 22 สวนหลวง กรุงเทพมหานคร</Card.Text>
                </StyledCardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card border="light">
                <CardImg variant="top" src={room6} />
                <StyledCardBody>
                  <Card.Title>หอพักกาญจนา</Card.Title>
                  <Card.Text>พระราม 4 คลองเตย กรุงเทพมหานคร</Card.Text>
                </StyledCardBody>
              </Card>
            </Col>
          </StyledRow>
        </Container>
      </Wrapper>
    );
  }
}

export default Recommended;
