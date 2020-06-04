import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../styles";
import BackProfile from "./styles";

const BackToProfiles = () => {
  const [sticky, setSticky] = useState("static");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 100 ? "static" : "sticky";
      setSticky(backgroundcolor);

      // this.setState({ navBackground: backgroundcolor });
    });
    return () => {
      // window.removeEventListener("scroll", this.onScroll, false);
      console.log("==");
    };
  }, []);

  return (
    <BackProfile style={{ position: sticky, top: 0 }}>
      <Link to="/">
        <i className="fas fa-chevron-left"></i>
        <p>BACK TO PROFILES</p>
      </Link>

      <div className="donate">
        <p>Donate now to end Police brutality on minorities</p>
        <Link to="/donations">
          <Button width="100px" padding="0.8rem">
            <button type="button">DONATE</button>
          </Button>
        </Link>
      </div>
    </BackProfile>
  );
};

export default BackToProfiles;
