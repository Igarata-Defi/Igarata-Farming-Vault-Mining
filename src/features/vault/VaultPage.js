import React, { useEffect } from 'react';
import PoolsList from './sections/PoolsList/PoolsList';

export default function VaultPage(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <PoolsList filtersCategory={props?.match?.params.category} />
    </>
  );
}
