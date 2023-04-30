"use client";

import { Home } from "@/pages/Home";
import { LoadingPage } from "@/pages/LoadingPage";
import { useEffect, useState } from "react";

interface IndexPageProps {
  params: {
    lang: string;
  };
}

export default function IndexPage({ params: { lang } }: IndexPageProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 4000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <Home lang={lang} />;
}
