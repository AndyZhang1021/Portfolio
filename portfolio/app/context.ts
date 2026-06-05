"use client";

import { createContext } from "react";

export const MyContext = createContext<Record<string, never> | null>(null);
