import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles({
  root: {
    width: 1000,
  },
});
const BottomNavigationComp = ({ items }) => {
  console.log(items);
  const classes = useStyles();
  const [value, setValue] = useState(items[0].label.toLowerCase());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        {items.map((item) => {
          return (
            <BottomNavigationAction
              label={item.label}
              value={item.label.toLowerCase()}
              icon={item.icon}
            />
          );
        })}
      </BottomNavigation>
    </div>
  );
};

export default BottomNavigationComp;
