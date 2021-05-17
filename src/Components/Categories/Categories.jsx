import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getUnsplashCategories,
  getUnsplashPhoto,
} from "../../Services/wallpaperService";

import CategoryGrid from "../Categories/CategoryGrid";
import WallpaperPagination from "../Pagination/WallpaperPagination";
import {
  AnimationContainer,
  LoadingImage,
  LoadingText,
} from "./LoadingAnimation";
import infinity from "../../icons/infinity.png";
import Footer from "../Footer/Footer";

export default function Categories(props) {
  const [data, setData] = useState({
    isDataReceived: false,
    categories: [],
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let collection = [];
    const controller = new AbortController();
    const signal = controller.signal;
    //Getting Categories from the API
    const fetch = async () => {
      const { response } = await getUnsplashCategories(currentPage, signal);
      const { results: collections } = response;
      collection = collections.map((collection) => {
        return {
          collectionId: collection.id,
          imageId: collection.cover_photo.id,
          title: collection.title,
        };
      });

      //Getting Cover Images from the api
      const fetchCoverImages = async () => {
        collection = await Promise.all(
          collection.map(async (category) => {
            const { response } = await getUnsplashPhoto(
              category.imageId,
              signal
            );
            return {
              collectionId: category.collectionId,
              imageId: category.imageId,
              title: category.title,
              src: response.urls.small,
            };
          })
        );
        const data = {
          isDataReceived: true,
          categories: collection,
        };
        setData(data);
      };
      fetchCoverImages();
    };

    fetch();
    return function cleanUp() {
      controller.abort();
    };
  }, [currentPage]);

  const handleOnPageChange = (event, value) => {
    //event.preventDefault();
    setCurrentPage(value);
  };

  const HandleCategoryClick = (category) => {
    let history = props.history;
    history.push("/wallpapers/category/" + category.collectionId);
  };

  return (
    <div>
      {data.isDataReceived ? (
        <div>
          <CategoryGrid
            categories={data.categories}
            onCategoryClick={HandleCategoryClick}
          ></CategoryGrid>

          <WallpaperPagination
            onChange={handleOnPageChange}
            numberOfPages={10}
          />
        </div>
      ) : (
        <AnimationContainer>
          <LoadingImage src={infinity} animate />
          <LoadingText>Fetching Data</LoadingText>
        </AnimationContainer>
      )}
      <Footer />
    </div>
  );
}
