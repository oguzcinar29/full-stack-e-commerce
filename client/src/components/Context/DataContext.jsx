import React, { createContext, useState, useContext, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [emailAlert, setEmailAlert] = useState(false);
  const [passwordAlert, setPassAlert] = useState(false);
  const [products, setProducts] = useState([{}]);

  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") || null
  );

  const [cartArr, setCartArr] = useState(
    JSON.parse(window.localStorage.getItem("cart"))
  );
  useEffect(() => {
    fetch("/api/auth/get-register-info")
      .then((res) => res.json())
      .then((data) => {
        setEmailAlert(data.emailExist);
        setPassAlert(data.passCheckh);
        setCurrentUser(data.currentUser1);
      });
    fetch("/api/products/get-products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    const data = window.localStorage.getItem("cart");
    setCartArr(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }, [cartArr]);

  const logout = async (inputs) => {
    setCurrentUser(null);
  };
  const AllContext = {
    emailAlert,
    currentUser,
    passwordAlert,
    products,
    setProducts,
    logout,
    cartArr,
    setCartArr,
    setCurrentUser,
    totalPrice,
    setTotalPrice,
  };
  return (
    <DataContext.Provider value={AllContext}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
