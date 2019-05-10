import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchListing } from "../../actions/listings";
import { Spinner, Container, Col, Row } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import styled from "styled-components";

const GalleryDiv = styled.div`
  display: flex;
`;

const H4 = styled.h4`
  font-size: 1.6rem;
  font-weight: 400;
`;

const P = styled.p`
  letter-spacing: normal;
  line-height: normal;
`;

const Img = styled.img`
  height: 300px;
  border: 1px solid ${props => props.theme.colorBlack};
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
            photos.push(listing[key]);
          }
        }
      }
    }
    return photos.map((photo, i) => {
      return <Img key={i} src={photo} alt={i} />;
    });
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

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
        <Gallery photos={this.renderPhotos()} onClick={this.openLightbox} />
        <Lightbox
          images={this.renderPhotos()}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        <Container>
          <Row>
            <Col md={8}>
              <h2 className="mt-3">{listing.name}</h2>
              <H4>{listing.price}</H4>
              <h5>{listing.name}</h5>
              <p>
                {listing.address} {listing.city}
              </p>
              <br />
              <h4>รายละเอียดเพิ่มเติม</h4>
              <P>{listing.description}</P>
            </Col>
          </Row>
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
