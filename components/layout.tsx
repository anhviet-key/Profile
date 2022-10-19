/** @format */

import React, { useEffect } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Loader from "./loader";
export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const load = setInterval(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearInterval(load);
    };
  }, [loading]);
  return (
    <div className='wrapper font-poppins'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          {children}
        </>
      )}
    </div>
  );
}
