import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchListing } from "../../actions/listings";
import { Spinner, Container, Col, Row, Form, Button } from "react-bootstrap";
import { FaMobileAlt } from "react-icons/fa";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import styled from "styled-components";
import agent from "../../img/agent.jpeg";
import addLine from "../../img/add-line-icon.png";

const H4 = styled.h4`
  font-size: 1.6rem;
  font-weight: 400;
`;

const H6 = styled.h6`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.colorTertiary};
`;

const P = styled.p`
  letter-spacing: normal;
  line-height: normal;
`;

const Pd = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

const AgentDiv = styled.div`
  background: ${props => props.theme.colorGreyLight};
  border-radius: 5px;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
`;

const DescDiv = styled.div`
  border-bottom: 1px dashed ${props => props.theme.colorGrey};
  margin-bottom: 10px;
`;

export class ListingDetail extends Component {
  state = { currentImage: 0 };

  static propTypes = {
    listing: PropTypes.object,
    fetchListing: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchListing(slug);
    window.scrollTo(0, 0);
  }

  renderPhotos() {
    const { listing } = this.props;
    const photos = [];

    for (let key in listing) {
      if (listing.hasOwnProperty(key)) {
        if (key.startsWith("photo_")) {
          if (listing[key]) {
            photos.push({
              src: listing[key],
              width: 4,
              height: 3
            });
          }
        }
      }
    }
    return photos;
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  onImageSelect = newIndex => {
    this.setState({
      currentImage: newIndex
    });
  };

  renderListing() {
    const { listing } = this.props;

    if (!listing) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }

    return (
      <div>
        {/* Image Gallery & Lightbox */}
        <Gallery photos={this.renderPhotos()} onClick={this.openLightbox} />
        <Lightbox
          images={this.renderPhotos()}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          showThumbnails={true}
          onClickThumbnail={this.onImageSelect}
        />
        <Container>
          <Row>
            {/* Main Listing Content */}
            <Col md={8}>
              <h2 className="mt-3">{listing.name}</h2>
              <H4>฿{listing.price}</H4>
              <h5>{listing.name}</h5>
              <p>
                {listing.address} {listing.city}
              </p>
              <br />
              <h4>รายละเอียด</h4>
              <Row>
                <Col>
                  <DescDiv>
                    <H6>ประเภท</H6>
                    <Pd>
                      {listing.listing_type}{" "}
                      {listing.sales_type === "Buy" ? "ขาย" : "ให้เช่า"}
                    </Pd>
                  </DescDiv>
                  <DescDiv>
                    <H6>ห้องนอน</H6>
                    <Pd>{listing.bedrooms}</Pd>
                  </DescDiv>
                  <DescDiv>
                    <H6>ห้องน้ำ</H6>
                    <Pd>{listing.bathrooms}</Pd>
                  </DescDiv>
                  <DescDiv>
                    <H6>ที่จอดรถ</H6>
                    <Pd>{listing.garage}</Pd>
                  </DescDiv>
                  <DescDiv>
                    <H6>จำนวนชั้น</H6>
                    <Pd>{listing.floor}</Pd>
                  </DescDiv>
                  <DescDiv>
                    <H6>พื้นที่ใช้สอย</H6>
                    <Pd>{listing.util_space} ตารางเมตร</Pd>
                  </DescDiv>
                  <DescDiv>
                    <H6>ขนาดที่ดิน</H6>
                    <Pd>{listing.sqmt} ตารางเมตร</Pd>
                  </DescDiv>
                </Col>
                <Col>
                  <DescDiv>
                    <H6>เฟอร์นิเจอร์</H6>
                    <Pd>{listing.furnishing}</Pd>
                  </DescDiv>
                  <DescDiv>
                    <H6>การถือครอง</H6>
                    <Pd>{listing.tenure}</Pd>
                  </DescDiv>
                  <DescDiv>
                    <H6>ผู้พัฒนาโครงการ</H6>
                    <Pd>{listing.developer}</Pd>
                  </DescDiv>
                  <DescDiv>
                    <H6>ปีที่สร้างเสร็จ</H6>
                    <Pd>{listing.built_year}</Pd>
                  </DescDiv>
                  <DescDiv>
                    <H6>ราคาต่อตารางเมตร</H6>
                    <Pd>{listing.psm} / ตารางเมตร</Pd>
                  </DescDiv>
                  <DescDiv>
                    <H6>อัพเดทล่าสุด</H6>
                    <Pd>{listing.updated_at} ago</Pd>
                  </DescDiv>
                </Col>
              </Row>
              <br />
              <h4>รายละเอียดเพิ่มเติม</h4>
              <P>{listing.description}</P>
              <br />
              <h4>สิ่งอำนวยความสะดวก</h4>
              <Row>
                <Col>
                  <P>{listing.car_park === true ? "ที่จอดรถ" : ""}</P>
                  <P>{listing.fitness === true ? "ฟิตเนส" : ""}</P>
                  <P>
                    {listing.security === true ? "รักษาความปลอดภัย 24 ชม." : ""}
                  </P>
                  <P>{listing.cctv === true ? "กล้องวงจรปิด" : ""}</P>
                </Col>
                <Col>
                  <P>{listing.playground === true ? "สนามเด็กเล่น" : ""}</P>
                  <P>{listing.swimming_pool === true ? "สระว่ายน้ำ" : ""}</P>
                  <P>{listing.pavillion === true ? "ลานพักผ่อน" : ""}</P>
                  <P>
                    {listing.multi_purpose_hall === true
                      ? "หอประชุมเอนกประสงค์"
                      : ""}
                  </P>
                </Col>
              </Row>
              <br />
              <h4>แผนที่</h4>
              <br />
            </Col>
            {/* Agent Section */}
            <Col md={4}>
              <AgentDiv>
                <Img src={agent} alt="agent" />
                <h5 className="mt-3">นายร่ำรวย ขายดี</h5>
                <p>นายหน้าอิสระ</p>
                <div>
                  <FaMobileAlt /> 082-999-9999
                </div>
                <img
                  className="mt-2 mb-3"
                  src={addLine}
                  width="150px"
                  alt="add line"
                />
                <Form>
                  <Form.Group controlId="formBasicText1">
                    <Form.Control type="text" placeholder="ชื่อ" />
                  </Form.Group>
                  <Form.Group controlId="formBasicText2">
                    <Form.Control type="text" placeholder="เบอร์โทรศัพท์" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="อีเมล์" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    สอบถามข้อมูล
                  </Button>
                </Form>
              </AgentDiv>
            </Col>
          </Row>
          <h4>ติดต่อผู้ขาย</h4>
          <AgentDiv>
            <Row>
              <Col>
                <Form>
                  <Form.Group controlId="formBasicText1">
                    <Form.Control type="text" placeholder="ชื่อ" />
                  </Form.Group>
                  <Form.Group controlId="formBasicText2">
                    <Form.Control type="text" placeholder="เบอร์โทรศัพท์" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="อีเมล์" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    สอบถามข้อมูล
                  </Button>
                </Form>
              </Col>
              <Col>
                <Img src={agent} alt="agent" />
                <h5 className="mt-3">นายร่ำรวย ขายดี</h5>
                <p>นายหน้าอิสระ</p>
                <div>
                  <FaMobileAlt /> 082-999-9999
                </div>
                <img
                  className="mt-2 mb-3"
                  src={addLine}
                  width="150px"
                  alt="add line"
                />
              </Col>
            </Row>
          </AgentDiv>
          <br />
          <h4>ดูตัวเลือกอื่นๆ</h4>
          <br />
        </Container>
      </div>
    );
  }

  render() {
    return <div>{this.renderListing()}</div>;
  }
}

const mapStateToProps = state => ({
  listing: state.listings.listing
});

export default connect(
  mapStateToProps,
  { fetchListing }
)(ListingDetail);
