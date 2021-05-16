import React, { useEffect, useState } from "react";
import WallpaperPagination from "../Pagination/WallpaperPagination";
import {
  AnimationContainer,
  LoadingImage,
  LoadingText,
} from "../Categories/LoadingAnimation";
import infinity from "../../icons/infinity.png";
import Grid from "./ItemsGrid";
import {
  getCategoryPhotos,
  searchWallpapers,
} from "../../Services/wallpaperService";
import SearchBanner from "./Search/SearchBanner";
import { Link } from "react-scroll";

export default function Wallpapers(props) {
  const [data, setData] = useState({
    wallpapers: [],
    numberOfPages: 0,
  });
  const [isDataReceived, setDataReceived] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    let match = props.match;
    let categoryId = match.params.id;

    if (categoryId === undefined) categoryId = "bo8jQKTaE0Y";

    const fetch = async () => {
      const { response } = await getCategoryPhotos(
        categoryId,
        currentPage,
        controller.signal
      );
      const { results: photos, total: totalPhotos } = response;
      const data = {
        wallpapers: photos,
        numberOfPages: Math.ceil(totalPhotos / 12),
      };
      setDataReceived(true);
      setData(data);
    };

    const fetchSearch = async () => {
      const { response } = await searchWallpapers(
        searchQuery,
        "landscape",
        currentPage,
        controller.signal
      );

      const { results: photos, total: totalPhotos } = response;
      const data = {
        wallpapers: photos,
        numberOfPages: Math.ceil(totalPhotos / 12),
      };
      console.log(response);
      setDataReceived(true);
      setData(data);
    };

    if (searchQuery.length === 0) {
      try {
        fetch();
      } catch (err) {
        console.log(err);
      }
    } else {
      fetchSearch();
    }

    return function cleanUp() {
      controller.abort();
    };
  }, [currentPage, searchQuery]);

  const handlePageChange = (event, value) => {
    event.preventDefault();
    setCurrentPage(value);
    setDataReceived(false);
  };

  const handleSearch = (query) => {
    if (query.length !== 0) {
      setCurrentPage(1);
      setSearchQuery(query);
      setDataReceived(false);
    }
  };

  return (
    <div>
      <SearchBanner onSearch={handleSearch} />
      {isDataReceived ? (
        <div>
          <Grid items={data.wallpapers} />
          <Link to="navbar" smooth={true}>
            <WallpaperPagination
              numberOfPages={data.numberOfPages}
              currentPage={currentPage}
              onChange={handlePageChange}
            />
          </Link>
        </div>
      ) : (
        <AnimationContainer>
          <LoadingImage src={infinity} animate />
          <LoadingText>Fetching Data</LoadingText>
        </AnimationContainer>
      )}
    </div>
  );
}
