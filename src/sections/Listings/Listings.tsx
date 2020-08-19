import React from "react";

import {
  DeleteListingData,
  DeleteListingVariables,
  ListingsData,
} from "./types";
import { server } from "../../lib/api";

const LISTINGS = `
query Listings {
  listings {
    id
    title
    image
    address
    price
    numOfGuests
    numOfBeds
    numOfBaths
    rating
  }
}
`;

const DELETE_LISTING = `
mutation DeleteListing($id: ID!) {
  deleteListing(id: $id) {
    id
  }
}
`;

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
    console.log(data);
  };

  const deleteListing = async () => {
    const { data } = await server.fetch<
      DeleteListingData,
      DeleteListingVariables
    >({
      query: DELETE_LISTING,
      variables: {
        id: "5f35ecc7d75bce09cce9ef74",
      },
    });
    console.log(data);
  };

  return (
    <div>
      <p>{title}</p>
      <button onClick={fetchListings}>Query listings!</button>
      <button onClick={deleteListing}>Delete a listing!</button>
    </div>
  );
};
