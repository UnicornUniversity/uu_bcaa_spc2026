import { createContext, useState, useEffect } from "react";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [state, setState] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      setState("loading");
      const response = await fetch("/category/list");

      if (response.ok) {
        const data = await response.json();
        setData(data);
        setState("success");
      } else {
        setError(response.statusText);
        setState("error");
      }
    };
    fetchCategories();
  }, []);

  const handleCreate = async (name, desc) => {
    const response = await fetch("/category/create", {
      method: "POST",
      body: JSON.stringify({ name, desc }),
    });

    if (response.ok) {
      const newCategory = await response.json();
      setData((currentData) => ({
        itemList: [...currentData.itemList, newCategory],
      }));
      setState("success");
    } else {
      setError(response.statusText);
      setState("error");
    }
  };

  return (
    <CategoryContext.Provider value={{ data, state, error }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
