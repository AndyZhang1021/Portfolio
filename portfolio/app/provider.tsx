"use client";

import { MyContext } from "./context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MyContext.Provider value={{}}>
      {children}
    </MyContext.Provider>
  );
}