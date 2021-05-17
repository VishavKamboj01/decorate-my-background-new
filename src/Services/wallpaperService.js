import { createApi } from "unsplash-js";
import { toast } from "react-toastify";
const accessKey = "Qz6rvzmTE6nwG7rVPv8kevJsTIntlTVlRUfqsHKfdG0";

const unsplash = createApi({
  accessKey: accessKey,
});

export function searchWallpapers(
  searchQuery,
  orientation,
  currentPage,
  signal
) {
  const result = unsplash.search
    .getPhotos(
      {
        query: searchQuery,
        page: currentPage,
        perPage: 15,
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
  const result = unsplash.topics
    .getPhotos(
      {
        topicIdOrSlug: categoryId,
        page: currentPage,
        perPage: 15,
      },
      { signal }
    )
    .catch((err) => {
      toast.error("Something went Wrong!");
    });

  return result;
}

export function getUnsplashCategories(currentPage, signal) {
  const result = unsplash.topics
    .list(
      {
        page: currentPage,
        perPage: 15,
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
