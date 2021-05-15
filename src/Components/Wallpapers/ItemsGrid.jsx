import WallpaperCard from "./WallpaperCard";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Grid(props) {
  return (
    <div
      className="container"
      style={{ marginTop: "3rem", marginBottom: "3rem" }}
    >
      <div className="row">
        {props.items.map((item) => {
          return (
            <div
              key={item.id}
              className="col- text-center"
              style={{ margin: "auto", alignSelf: "center" }}
            >
              <WallpaperCard onImageClick={handleImageClick} image={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const handleImageClick = (image) => {};
