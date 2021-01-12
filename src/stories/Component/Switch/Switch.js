import React from "react";
import PropTypes from "prop-types";
import "./Switch.css";
// import FormGroup from "@material-ui/core/FormGroup";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export const SingleCheckBox = (props) => {
  return (
    <FormControlLabel
      control={
        <Switch
          className={`MuiSwitch-switchBase-${props.checkboxVarient} ${props.className}`}
          disabled={props.disabled}
          checked={props.checked}
          onChange={props.handleChange}
          name={props.name}
          color={props.checkboxVarient}
          {...props}
        />
      }
      label={props.label}
    />
  );
};

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export const IosCheckBox = (props) => {
  return (
    <FormControlLabel
      control={
        <IOSSwitch
          className={`MuiSwitch-large-${props.checkboxVarient} ${props.className}`}
          classes={{
            // root: `MuiSwitch-large-${props.checkboxVarient}-track`,
            // switchBase: `MuiSwitch-large-${props.checkboxVarient}-switchBase`,
            // thumb: `MuiSwitch-large-${props.checkboxVarient}-track`,
            track: `MuiSwitch-large-${props.checkboxVarient}-track`,
            checked: `MuiSwitch-large-${props.checkboxVarient}-checked`,
          }}
          disabled={props.disabled}
          checked={props.checked}
          onChange={props.handleChange}
          name={props.name}
          color={props.checkboxVarient}
          {...props}
        />
      }
      label={props.label}
    />
  );
};

export const CheckBoxGroup = (props) => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch inputProps={{ "aria-label": "primary checkbox" }} />
      <Switch disabled inputProps={{ "aria-label": "disabled checkbox" }} />
      <Switch
        disabled
        checked
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch
        defaultChecked
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
    </div>
  );
};

export const BasicSwitch = ({ checkboxVarient, type, ...props }) => {
  switch (type) {
    case "single":
      return <SingleCheckBox checkboxVarient={checkboxVarient} {...props} />;
    case "multiple":
      return <CheckBoxGroup checkboxVarient={checkboxVarient} />;
    case "large":
      return <IosCheckBox checkboxVarient={checkboxVarient} />;
    default:
      return <SingleCheckBox />;
  }
};

BasicSwitch.propTypes = {
  // isbutton: PropTypes.bool,
  checkboxVarient: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  type: PropTypes.oneOf(["single", "large"]),
  // buttonbackground: PropTypes.string,
  // buttonText: PropTypes.string,
  // buttonTextColor: PropTypes.string,
  // cardTextColor: PropTypes.string,
  // cardBackground: PropTypes.string,
  // cardTitle: PropTypes.string,
  // cardText: PropTypes.string,
  // border: PropTypes.bool,
  // cardSubtitle: PropTypes.string,
  // cardheadertext: PropTypes.string,
  // cardFooterText: PropTypes.string,
  // tabCard: PropTypes.bool,
};

BasicSwitch.defaultProps = {
  // isbutton: false,
};
