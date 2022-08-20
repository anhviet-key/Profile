/** @format */

import React, { useEffect, useRef } from "react";

export default function Loader() {
  // const percent: any = useRef<HTMLElement>();
  // const reftwo: any = useRef<HTMLElement>();
  // const refthree: any = useRef(0);
  const [loading, setLoading] = React.useState(0);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoading((pre) => pre + 1);
      if (loading >= 100) {
        setLoading(100);
        clearTimeout(load);
      }
    }, 10);
    return () => {
      clearTimeout(load);
    };
  }, [loading]);
  return (
    <div className='main-loader'>
      <div className='container-loader'>
        <div className='welcome'>Nguyễn Anh Việt</div>
        <div className='bar-percent'>
          <div
            className='outter'
            // ref={reftwo}
            style={{ width: `${loading}px` }}></div>
        </div>
        <div className='c-center'>
          <span
            // ref={percent}
            className='percent'></span>
          {loading}
          <span>%</span>
        </div>
      </div>
    </div>
  );
}
