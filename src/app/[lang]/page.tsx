"use client";

import { Home } from "@/views/Home";
import { LoadingPage } from "@/views/LoadingPage";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <Home />;
}
