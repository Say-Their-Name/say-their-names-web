import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../styles";
import BackProfile from "./styles";

const BackToProfiles = () => {
  const [sticky, setSticky] = useState("static");
  const [donationsDisplay, setDonationsDisplay] = useState("none");

  useEffect(() => {
    const onScroll = document.addEventListener("scroll", () => {
      const scrollHeight = window.scrollY < 100 ? "static" : "sticky";
      const scrollHeightDisplay = window.scrollY < 100 ? "none" : "flex";
      setSticky(scrollHeight);
      setDonationsDisplay(scrollHeightDisplay);
    });
    return () => {
      window.removeEventListener("scroll", onScroll, false);
    };
  }, []);

  return (
    <BackProfile style={{ position: sticky, top: 0 }}>
      <Link to="/">
        <i className="fas fa-chevron-left" />
        <p>BACK TO PROFILES</p>
      </Link>

      <div className="donate" style={{ display: donationsDisplay }}>
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
