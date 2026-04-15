import { createContext, useState, useEffect } from "react";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [state, setState] = useState();

  console.log(data, error, state);

  useEffect(() => {
    const fetchCategories = async () => {
      setState("loading");
      const response = await fetch("/category/list");
      console.log(response);

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

  return (
    <CategoryContext.Provider value={{ data, state, error }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
