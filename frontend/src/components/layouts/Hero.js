import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import heroImage from "../../img/hero2.jpg";

const HeroBg = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(83, 92, 104, 0.5)
    ),
    url(${heroImage});
  background-size: cover;
  background-position: center;
`;

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  color: ${props => props.theme.colorPrimary};
`;

const StyledForm = styled(Form)`
  background-color: ${props => props.theme.colorWhite};
  padding: 2rem;
  border-radius: 5px;
`;

const ButtonPrimary = styled(Button)`
  background-color: ${props => props.theme.colorPrimary};
  &:hover {
    background-color: ${props => props.theme.colorBlueDark};
  }
`;

const Hero = () => {
  return (
    <HeroBg>
      <Container>
        <StyledRow>
          <Col xs={12} sm={12} md={8}>
            <StyledForm>
              <h1>ค้นหาบ้าน และคอนโด จากทั่วกรุงเทพ</h1>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>สถานที่</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ค้นหาจาชื่อหอพัก ชื่อทำเล ชื่อสถานีรถไฟฟ้า"
                />
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  ต้องการ
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="ซื้อ"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="เช่า"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Col>
              </Form.Group>
              <ButtonPrimary variant="primary" type="submit" block>
                ค้นหา
              </ButtonPrimary>
            </StyledForm>
          </Col>
        </StyledRow>
      </Container>
    </HeroBg>
  );
};

export default Hero;
