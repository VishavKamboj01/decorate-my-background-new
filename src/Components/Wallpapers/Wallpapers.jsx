import React, { useEffect, useState } from "react";
import WallpaperPagination from "../Pagination/WallpaperPagination";
import {
  AnimationContainer,
  LoadingImage,
  LoadingText,
} from "../Categories/LoadingAnimation";
import infinity from "../../icons/infinity.png";
import Grid from "./ItemsGrid";
import { getCategoryPhotos } from "../../Services/wallpaperService";

export default function Wallpapers(props) {
  const [data, setData] = useState({
    isDataReceived: false,
    wallpapers: [],
    numberOfPages: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    let match = props.match;
    let categoryId = match.params.id;

    if (categoryId === undefined) categoryId = "1041983";

    const fetch = async () => {
      const { response } = await getCategoryPhotos(
        categoryId,
        currentPage,
        controller.signal
      );
      const { results: photos, total: totalPhotos } = response;
      const data = {
        isDataReceived: true,
        wallpapers: photos,
        numberOfPages: Math.ceil(totalPhotos / 12),
      };
      console.log(data);
      setData(data);
    };
    try {
      fetch();
    } catch (err) {
      console.log(err);
    }

    return function cleanUp() {
      controller.abort();
    };
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    event.preventDefault();
    setCurrentPage(value);
  };

  return (
    <div>
      {data.isDataReceived ? (
        <div>
          <Grid items={data.wallpapers} />
          <WallpaperPagination
            numberOfPages={data.numberOfPages}
            currentPage={currentPage}
            onChange={handlePageChange}
          />
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
