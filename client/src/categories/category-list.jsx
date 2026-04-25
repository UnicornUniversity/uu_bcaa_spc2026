import { useContext } from "react";
import { CategoryContext } from "./category-provider";
import Category from "./category";

function CategoryList() {
  const { data } = useContext(CategoryContext);

  return (
    <div>
      <h1>Seznam kategorií</h1>
      <div>
        <Category />
      </div>
      {data.itemList.length > 0 ? (
        <div>Seznam kategorií</div>
      ) : (
        <div>Není vyplněna žádná kategorie</div>
      )}
    </div>
  );
}

export default CategoryList;
