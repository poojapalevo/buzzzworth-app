"use client";

import { createContext, useContext, useEffect, useState } from "react";

const RootContext = createContext();

export const RootProvider = ({ children }) => {
    const [data,setData]= useState({})
  return (
    <RootContext.Provider value={{ data, setData}}>
      {children}
    </RootContext.Provider>
  );
};

export const useRoot = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error("useRoot must be used within a RootProvider");
  }
  return context;
};
