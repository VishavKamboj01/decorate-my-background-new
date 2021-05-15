import "bootstrap/dist/css/bootstrap.min.css";
import CategoryCardComponent from "./CategoryCardComponent";

export default function CategoryGrid(props) {
  const { categories, onCategoryClick } = props;
  return (
    <div
      className="container"
      style={{ marginTop: "5rem", marginBottom: "3rem" }}
    >
      <div className="row">
        {categories.map((category) => {
          return (
            <div
              key={category.imageId}
              className="col- text-center"
              style={{
                margin: "auto",
                alignSelf: "center",
                padding: "0",
              }}
            >
              <CategoryCardComponent
                category={category}
                onCategoryClick={onCategoryClick}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
