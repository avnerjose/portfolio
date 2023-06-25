"use client";

import { Home } from "@/views/Home";
import { LoadingPage } from "@/views/LoadingPage";
import { useEffect, useState } from "react";

interface IndexPageProps {
  params: {
    lang: string;
  };
}

export default function IndexPage({ params: { lang } }: IndexPageProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <Home lang={lang} />;
}
