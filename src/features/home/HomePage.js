import React, { useEffect } from 'react';
import PoolsList from "features/vault/sections/PoolsList/PoolsList";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <PoolsList fromPage='home'/>
    </>
  );
}
