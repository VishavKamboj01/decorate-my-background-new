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
  WallpaperHeading,
} from "./SearchComponents";

export default function SearchBanner(props) {
  const [data, setData] = useState({
    query: "",
    isSearchButtonClicked: false,
    showHeading: false,
  });

  const [activeBannerButton, setActiveBannerButton] = useState("");

  const handleChange = (input) => {
    const q = input.currentTarget.value;
    const dataTemp = { ...data };
    dataTemp.query = q;
    dataTemp.showHeading = false;
    setData(dataTemp);
  };

  const handleBannerItemClicked = (query) => {
    if (activeBannerButton !== query) setActiveBannerButton(query);

    const dataTemp = { ...data };
    dataTemp.query = "";
    dataTemp.showHeading = false;
    setData(dataTemp);
    props.onSearch(query);
  };

  const handleSearchClicked = () => {
    const dataTemp = { ...data };
    dataTemp.showHeading = true;
    dataTemp.isSearchButtonClicked = true;
    props.onSearch(data.query);
    setData(dataTemp);
    setActiveBannerButton("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClicked();
    }
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
            onKeyPress={handleKeyPress}
          />
          <SearchButton
            onAnimationEnd={() => {
              const dataTemp = { ...data };
              dataTemp.isSearchButtonClicked = false;
              setData(dataTemp);
            }}
            animate={data.isSearchButtonClicked}
            onClick={handleSearchClicked}
          >
            Search
          </SearchButton>
        </SearchContainer>

        <ButtonsContainer>
          <ButtonSpan
            selected={activeBannerButton === "Latest" ? true : false}
            onClick={() => handleBannerItemClicked("Latest")}
          >
            Latest
          </ButtonSpan>
          <ButtonSpan
            selected={activeBannerButton === "Top Rated" ? true : false}
            onClick={() => handleBannerItemClicked("Top Rated")}
          >
            Top Rated
          </ButtonSpan>
          <ButtonSpan
            selected={activeBannerButton === "Featured" ? true : false}
            onClick={() => handleBannerItemClicked("Featured")}
          >
            Featured
          </ButtonSpan>
          <ButtonSpan
            selected={activeBannerButton === "High Quality" ? true : false}
            onClick={() => handleBannerItemClicked("High Quality")}
          >
            Our Picks
          </ButtonSpan>
        </ButtonsContainer>
      </SearchCard>
      {data.showHeading && data.query !== "" ? (
        <WallpaperHeading>
          Search Results for "&nbsp;{data.query}&nbsp;"
        </WallpaperHeading>
      ) : (
        ""
      )}
    </SearchBannerContainer>
  );
}
