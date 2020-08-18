import React from "react";

import { ListingsData } from "./types";
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
}`;

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
    console.log(data);
  };

  return (
    <div>
      <p>{title}</p>
      <button onClick={fetchListings}>Query Listings!</button>
    </div>
  );
};
