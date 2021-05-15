import React from "react";
import {
  CategoryCard,
  CategoryButton,
  CategoryImage,
} from "./CategoriesComponents";

export default function CategoryCardComponent(props) {
  const { category, onCategoryClick } = props;
  return (
    <CategoryCard>
      <CategoryImage src={category.src} />
      <CategoryButton onClick={() => onCategoryClick(category)}>
        {category.title}
      </CategoryButton>
    </CategoryCard>
  );
}
