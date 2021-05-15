// import image_1 from "../images/image_1.jpg";
// import image_2 from "../images/image_2.jpg";
// import image_3 from "../images/image_3.jpg";
// import image_4 from "../images/image_4.jpg";
// import image_5 from "../images/image_5.jpg";
// import image_6 from "../images/image_6.jpg";
// import image_7 from "../images/image_7.jpg";
// import image_8 from "../images/image_8.jpg";
// import image_9 from "../images/anonymous.jpg";
// import image_10 from "../images/evening.jpg";
import { createApi } from "unsplash-js";
import { toast } from "react-toastify";
const accessKey = "Qz6rvzmTE6nwG7rVPv8kevJsTIntlTVlRUfqsHKfdG0";

const unsplash = createApi({
  accessKey: accessKey,
});

// const wallpapers = [
//   { id: 1, imageUrl: "/static/media/image_1.f775692e.jpg", title: "Image 1" },
//   { id: 2, imageUrl: "/static/media/image_2.e02d9463.jpg", title: "Image 2" },
//   { id: 3, imageUrl: "/static/media/image_3.11b84a65.jpg", title: "Image 3" },
//   { id: 4, imageUrl: "/static/media/image_4.fa2f5f01.jpg", title: "Image 4" },
//   { id: 5, imageUrl: "/static/media/image_5.2fed25fb.jpg", title: "Image 5" },
//   { id: 6, imageUrl: "/static/media/image_6.c9cdc435.jpg", title: "Image 6" },
//   { id: 7, imageUrl: "/static/media/image_7.dc35a259.jpg", title: "Image 7" },
//   { id: 8, imageUrl: "/static/media/image_8.fd4952d9.jpg", title: "Image 8" },
//   { id: 9, imageUrl: "/static/media/anonymous.4062b9e4.jpg", title: "Image 9" },
//   { id: 10, imageUrl: "/static/media/evening.dc40ec57.jpg", title: "Image 10" },
// ];

// export function getWallpapers() {
//   return wallpapers;
// }

export function getUnsplashWallpapers(
  orientation,
  category,
  currentPage,
  signal
) {
  const result = unsplash.search
    .getPhotos(
      {
        query: category,
        page: currentPage,
        perPage: 12,
        orientation: orientation,
      },
      { signal }
    )
    .catch((err) => {
      toast.error("Something went Wrong!");
    });

  return result;
}

export function getCategoryPhotos(categoryId, currentPage, signal) {
  const result = unsplash.collections
    .getPhotos(
      {
        collectionId: categoryId,
        page: currentPage,
        perPage: 12,
      },
      { signal }
    )
    .catch((err) => {
      toast.error("Something went Wrong!");
    });

  return result;
}

export function getUnsplashCategories(currentPage, signal) {
  const result = unsplash.collections
    .list(
      {
        page: currentPage,
        perPage: 12,
      },
      { signal }
    )
    .catch((err) => {
      toast.error("Something went Wrong!");
    });

  return result;
}

export function getUnsplashPhoto(id, signal) {
  const result = unsplash.photos
    .get(
      {
        photoId: id,
      },
      { signal }
    )
    .catch((err) => {
      console.log("An Unexpected Error Occured");
    });

  return result;
}

export function getUnsplashRandom() {
  const result = unsplash.photos.getRandom({
    query: "wallpapers",
    count: 10,
  });

  return result;
}
