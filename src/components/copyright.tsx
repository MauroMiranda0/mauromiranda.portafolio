"use client";

import { useEffect, useState } from 'react';

export function Copyright() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) {
    // Render nothing on the server and during the initial client render
    return <div className="container px-4 md:px-6 mt-8 text-center text-xs text-primary-foreground/50 h-5" />;
  }

  return (
    <div className="container px-4 md:px-6 mt-8 text-center text-xs text-primary-foreground/50">
      © {year} Mauricio Vergara. All Rights Reserved.
    </div>
  );
}
