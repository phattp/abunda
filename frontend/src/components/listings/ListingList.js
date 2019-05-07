import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Breadcrumb,
  Container,
  Spinner,
  Col,
  Row,
  Form
} from "react-bootstrap";
import { fetchListings } from "../../actions/listings";
import styled from "styled-components";

const Img = styled.img`
  width: 20rem;
  height: 12rem;
  object-fit: cover;
`;

const Card = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.colorGreyLight};
  border-radius: 5px;
  margin-bottom: 20px;
  overflow: hidden;

  box-shadow: 2px 3px 7px 1px rgba(0, 0, 0, 0.1);

  :hover {
    box-shadow: 2px 3px 7px 1px rgba(0, 0, 0, 0.2);
  }
`;

const CardDetail = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;

const BreadcrumbLink = styled(Link)`
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colorPrimary};

  :link,
  :visited {
    text-decoration: none;
    color: ${props => props.theme.colorPrimary};
  }

  :hover,
  :active {
    color: ${props => props.theme.colorBlueDark};
  }
`;

const FormCard = styled.div`
  border: 1px solid ${props => props.theme.colorGreyLight};
  border-radius: 5px;
  padding: 10px;
`;

const P = styled.p`
  margin-top: 10px;
`;

class ListingList extends Component {
  static propTypes = {
    listings: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchListings();
    window.scrollTo(0, 0);
  }

  renderBreadcrumb() {
    return (
      <Breadcrumb className="mt-3">
        <BreadcrumbLink to="/">Home</BreadcrumbLink>
        <Breadcrumb.Item active>/ Listings</Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  renderSearchForm() {
    return (
      <FormCard>
        <h4>ประเภทอสังหาริมทรัพย์</h4>
        <h5>ที่อยู่อาศัย</h5>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="คอนโด" />
          <Form.Check type="checkbox" label="บ้านเดี่ยว" />
          <Form.Check type="checkbox" label="ทาวน์โฮม" />
        </Form.Group>
        <h5>เชิงพาณิชย์</h5>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="อาคารพาณิชย์" />
          <Form.Check type="checkbox" label="อาคารสำนักงาน" />
          <Form.Check type="checkbox" label="โรงแรม" />
        </Form.Group>
        <h5>อื่นๆ</h5>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="ที่ดิน" />
          <Form.Check type="checkbox" label="โรงงาน / โกดัง" />
        </Form.Group>
      </FormCard>
    );
  }

  renderListingList() {
    if (!this.props.listings) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    return this.props.listings.map(listing => {
      return (
        <Card key={listing.id}>
          <Img src={listing.photo_main} alt={listing.name} />
          <CardDetail>
            <StyledLink to={`listings/${listing.slug}`} target="_blank">
              {listing.name.length > 50
                ? listing.name.substring(0, 50) + "..."
                : listing.name}
            </StyledLink>
            <P>
              {listing.address} {listing.city}
            </P>
            <p>
              {listing.bedrooms} ห้องนอน &#8729; {listing.bathrooms} ห้องน้ำ
              &#8729; ฿{listing.psm} / ตารางเมตร
            </p>
            <h6>฿{listing.price}</h6>
            <p>{listing.listing_type}</p>
          </CardDetail>
        </Card>
      );
    });
  }

  render() {
    return (
      <Container>
        {this.renderBreadcrumb()}
        <Row>
          <Col xs={12} sm={3}>
            {this.renderSearchForm()}
          </Col>
          <Col xs={12} sm={9}>
            {this.renderListingList()}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  listings: state.listings.listings
});

export default connect(
  mapStateToProps,
  { fetchListings }
)(ListingList);
