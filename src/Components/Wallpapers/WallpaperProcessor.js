import { getUnsplashWallpapers } from "../../Services/wallpaperService";

export default async function getWallpapers(
  orientation,
  category,
  currentPage
) {
  return await getUnsplashWallpapers(orientation, category, currentPage);
}
