import React from "react";
import PropTypes from "prop-types";
import "./checkBox.css";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const SingleCheckBox = (props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          className={`Mui-checked-${props.checkboxVarient} ${props.className}`}
          disabled={props.disabled}
          checked={props.checked}
          onChange={props.handleChange}
          name={props.name}
          color={props.checkboxVarient}
          indeterminate={props.indeterminate}
          icon={props.icon}
          checkedIcon={props.checkedIcon}
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
    checkedF: true,
    checkedG: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox name="checkedC" />}
        label="Uncontrolled"
      />
      <FormControlLabel
        disabled
        control={<Checkbox name="checkedD" />}
        label="Disabled"
      />
      <FormControlLabel
        disabled
        control={<Checkbox checked name="checkedE" />}
        label="Disabled"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            onChange={handleChange}
            name="checkedF"
            indeterminate
          />
        }
        label="Indeterminate"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedG}
            onChange={handleChange}
            name="checkedG"
          />
        }
        label="Custom color"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
          />
        }
        label="Custom icon"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
        }
        label="Custom size"
      />
    </FormGroup>
  );
};

export const BasicCheckBox = ({ checkboxVarient, type, ...props }) => {
  switch (type) {
    case "single":
      return <SingleCheckBox checkboxVarient={checkboxVarient} {...props} />;
    case "multiple":
      return <CheckBoxGroup checkboxVarient={checkboxVarient} />;
    default:
      return <SingleCheckBox />;
  }
};

BasicCheckBox.propTypes = {
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
  type: PropTypes.oneOf(["single", "multiple"]),
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

BasicCheckBox.defaultProps = {
  // isbutton: false,
};
