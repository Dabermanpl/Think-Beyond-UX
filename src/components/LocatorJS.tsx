"use client";

import { useEffect } from "react";
import setupLocator from "@locator/runtime";

export function LocatorJS() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      setupLocator();
    }
  }, []);

  return null;
}
