import { useState, useEffect } from "react";

const useScrollHeader = () => {
  const [headerWhite, setHeaderWhite] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 10) {
      setHeaderWhite(true);
    } else {
      setHeaderWhite(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return headerWhite;
};

export default useScrollHeader;
