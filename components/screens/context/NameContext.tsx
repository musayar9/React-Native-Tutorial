import React, { createContext, PropsWithChildren, useState } from "react";

type NameContextType = {
  name: string;
  setName:(value:string)=>void
};

export const NameContext = createContext<NameContextType>({ name: "" });

export const NameContextProvider = ({ children }: PropsWithChildren) => {
  const [name, setName] = useState<string>("Musa Sayar");

  const changeName = (value: string) => setName(value);

  return (
    <NameContext.Provider value={{ name, setName:changeName}}>
      {children}
    </NameContext.Provider>
  );
};

/*
<NameContextProvider>

</NameContextProvider>

*/
