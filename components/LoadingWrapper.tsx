"use client";

import React, { useEffect, useState } from "react";
import Loading from "../components/loading";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // Durasi loading
    return () => clearTimeout(timeout);
  }, []);

  return <>{loading ? <Loading /> : children}</>;
}
