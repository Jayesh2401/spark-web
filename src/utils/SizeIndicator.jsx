import React, { useState, useEffect } from "react";

const SizeIndicator = () => {
  const [currentSize, setCurrentSize] = useState("");
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const useWindowWidth = () => {
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return windowWidth;
  };

  const window_width = useWindowWidth();

  useEffect(() => {
    if (window_width < 640) setCurrentSize("sm");
    else if (window_width < 768) setCurrentSize("md");
    else if (window_width < 1024) setCurrentSize("lg");
    else if (window_width < 1280) setCurrentSize("xl");
    else if (window_width < 1536) setCurrentSize("2xl");
    else if (window_width < 1620) setCurrentSize("3xl");
    else setCurrentSize("3xl");
  }, [windowWidth]);

  return (
    <div className=" absolute  top-0 left-0 bg-gray-800 text-white p-2 text-sm">
      {currentSize}
    </div>
  );
};

export default SizeIndicator;
