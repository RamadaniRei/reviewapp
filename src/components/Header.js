import React from "react";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
function Header({ handleToggleDarkMode }) {
  return (
    <div className="header">
      <h1>
        Reviews Corner <ReviewsIcon />
      </h1>
      <Button
        className="save"
        onClick={() => {
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode);
        }}
      >
        <Brightness4Icon />
      </Button>
    </div>
  );
}

export default Header;
