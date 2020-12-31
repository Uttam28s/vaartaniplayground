import React from "react";
import PropTypes from "prop-types";
import "./Tootltips.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { SimpleButton } from "../Button/Button";

export const SimpleTooltips = ({
  position,
  buttonVariant,
  tooltipsText,
  ...props
}) => {
  return (
    <div>
      <OverlayTrigger
        trigger="click"
        key={position}
        placement={position}
        overlay={
          <Tooltip id={`popover-positioned-${position}`} {...props}>
            {tooltipsText || "My ToolTip"}
          </Tooltip>
        }
      >
        <SimpleButton
          variant={buttonVariant}
          value={`Tooltip on ${position}`}
        ></SimpleButton>
      </OverlayTrigger>
    </div>
  );
};

SimpleTooltips.propTypes = {
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  buttonVariant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
};

// import React,{useState} from "react";
// import PropTypes from "prop-types";
// import "./Tootltips.css";
// import { Toast } from "react-bootstrap";
// import { SimpleButton } from "../Button/Button";

// export const SimpleTooltips = ({
//   position,
//   buttonVariant,
//   tooltipsText,
//   ...props
// }) => {
//   const [shows, setShows] = useState(false)
//   return (
//     <div>
//       <Toast show={shows} onClose={setShows(!shows)}>
//           <Toast.Header>
//             {toastHeader}
//           </Toast.Header>
//           <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
//         </Toast>
//         <SimpleButton
//           variant={buttonVariant}
//           value={`Tooltip on ${position}`}
//         ></SimpleButton>
//     </div>
//   );
// };

// SimpleTooltips.propTypes = {
//   position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
//   buttonVariant: PropTypes.oneOf([
//     "primary",
//     "secondary",
//     "success",
//     "danger",
//     "warning",
//     "info",
//     "light",
//     "dark",
//   ]),
// };
