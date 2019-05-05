import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Breadcrumb, Container, Spinner } from "react-bootstrap";
import { fetchListings } from "../../actions/listings";
import styled from "styled-components";

const Img = styled.img`
  width: 20rem;
  height: 12rem;
  object-fit: cover;
`;

const Card = styled.div`
  display: flex;
  width: 80%
  border: 1px solid ${props => props.theme.colorGreyLight};
  border-radius: 5px;
  margin-bottom: 20px;
  overflow: hidden;

  box-shadow: 2px 3px 7px 1px rgba(0, 0, 0, 0.1);
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

class ListingList extends Component {
  static propTypes = {
    listings: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchListings();
  }

  renderBreadcrumb() {
    return (
      <Breadcrumb className="mt-3">
        <BreadcrumbLink to="/">Home</BreadcrumbLink>
        <Breadcrumb.Item active>/ Listings</Breadcrumb.Item>
      </Breadcrumb>
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
            <StyledLink to={`listings/${listing.slug}`}>
              {listing.name.length > 50
                ? listing.name.substring(0, 50) + "..."
                : listing.name}
            </StyledLink>
            <p>
              {listing.address} {listing.city}
            </p>
            <p>{listing.price}</p>
          </CardDetail>
        </Card>
      );
    });
  }

  render() {
    return (
      <Container>
        {this.renderBreadcrumb()}
        {this.renderListingList()}
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
