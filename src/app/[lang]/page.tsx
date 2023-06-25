"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Home } from "@/views/Home";
import { LoadingPage } from "@/views/LoadingPage";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <Home />;
}
