import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setValue(null)}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        ></BottomNavigation>
      </ClickAwayListener>
    </>
  );
};
export default Navbar;
