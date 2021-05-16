import React, { useState } from "react";
import {
  ButtonsContainer,
  ButtonSpan,
  ContainerCutout,
  SearchBannerContainer,
  SearchBar,
  SearchButton,
  SearchCard,
  SearchHeading,
  SearchContainer,
} from "./SearchComponents";

export default function SearchBanner(props) {
  const [query, setQuery] = useState("");

  const handleChange = (input) => {
    const q = input.currentTarget.value;
    setQuery(q);
  };

  return (
    <SearchBannerContainer>
      <ContainerCutout />
      <SearchCard>
        <SearchHeading>Find your favourites</SearchHeading>
        <SearchContainer>
          <SearchBar
            id="searchBar"
            name="searchBar"
            value={query}
            onChange={handleChange}
            placeholder="What are you looking for?"
          />
          <SearchButton
            onClick={() => {
              props.onSearch(query);
              setQuery("");
            }}
          >
            Search
          </SearchButton>
        </SearchContainer>

        <ButtonsContainer>
          <ButtonSpan>Latest</ButtonSpan>
          <ButtonSpan>Top Rated</ButtonSpan>
          <ButtonSpan>Featured</ButtonSpan>
          <ButtonSpan>Our Picks</ButtonSpan>
        </ButtonsContainer>
      </SearchCard>
    </SearchBannerContainer>
  );
}
