import React, { useState } from "react";
import {
  ButtonsContainer,
  ContainerCutout,
  ButtonSpan,
  SearchBannerContainer,
  SearchBar,
  SearchButton,
  SearchCard,
  SearchHeading,
  SearchContainer,
} from "./SearchComponents";

export default function SearchBanner(props) {
  const [data, setData] = useState({
    query: "",
    isSearchButtonClicked: false,
  });

  const handleChange = (input) => {
    const q = input.currentTarget.value;
    const dataTemp = { ...data };
    dataTemp.query = q;
    setData(dataTemp);
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
            value={data.query}
            onChange={handleChange}
            placeholder="What are you looking for?"
          />
          <SearchButton
            onAnimationEnd={() => {
              const dataTemp = { ...data };
              dataTemp.isSearchButtonClicked = false;
              setData(dataTemp);
            }}
            animate={data.isSearchButtonClicked}
            onClick={() => {
              const dataTemp = { ...data };
              dataTemp.query = "";
              dataTemp.isSearchButtonClicked = true;
              props.onSearch(data.query);
              setData(dataTemp);
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
