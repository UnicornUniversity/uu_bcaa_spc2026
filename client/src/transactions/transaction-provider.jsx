import { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [state, setState] = useState();
  const [date, setDate] = useState(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1).toString().padStart(2, "0")
  );

  const fetchCategories = async () => {
    setState("loading");
    const response = await fetch("/transaction/list?date=" + date);
    if (response.ok) {
      const data = await response.json();
      setData(data);
      setState("success");
    } else {
      setError(response.statusText);
      setState("error");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [date]);

  const handleCreate = async (name, desc) => {
    setState("creating");
    const response = await fetch("/transaction/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, desc }),
    });

    if (response.ok) {
      const newTransaction = await response.json();
      setData((currentData) => {
        currentData.itemList.push(newTransaction);
        return { ...currentData };
      });
      setState("success");
    } else {
      setError(response.statusText);
      setState("errorCreating");
    }
  };

  const handleUpdate = async (id, name, desc) => {
    setState("updating_" + id);
    const response = await fetch("/transaction/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, desc }),
    });

    if (response.ok) {
      const newTransaction = await response.json();
      setData((currentData) => {
        const itemIndex = currentData.itemList.findIndex(
          (item) => item.id === id
        );
        currentData.itemList[itemIndex] = newTransaction;
        return { ...currentData };
      });
      setState("success");
    } else {
      setError(response.statusText);
      setState("errorCreating");
    }
  };

  const handleDelete = async (id) => {
    setState("deleting_" + id);
    const response = await fetch("/transaction/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      await response.json();
      setData((currentData) => {
        const itemIndex = currentData.itemList.findIndex(
          (item) => item.id === id
        );
        currentData.itemList.splice(itemIndex, 1);
        return { ...currentData };
      });
      setState("success");
    } else {
      setError(response.statusText);
      setState("errorDeleting");
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        data,
        state,
        error,
        date,
        handlerMap: {
          handleCreate,
          handleUpdate,
          handleDelete,
          fetchCategories,
          setDate,
        },
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
