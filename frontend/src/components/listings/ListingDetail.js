import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchListing } from "../../actions/listings";
import { Spinner, Container } from "react-bootstrap";

export class ListingDetail extends Component {
  static propTypes = {
    listing: PropTypes.object,
    fetchListing: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchListing(slug);
    window.scrollTo(0, 0);
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
        <h2>{listing.name}</h2>
        <img src={listing.photo_main} alt={listing.name} />
        <h4>{listing.price}</h4>
        <h5>{listing.name}</h5>
        <p>
          {listing.address} {listing.city}
        </p>
        <br />
        <h4>รายละเอียดเพิ่มเติม</h4>
        <p>{listing.description}</p>
      </div>
    );
  }

  render() {
    return <Container>{this.renderListing()}</Container>;
  }
}

const mapStateToProps = state => ({
  listing: state.listings.listing
});

export default connect(
  mapStateToProps,
  { fetchListing }
)(ListingDetail);
