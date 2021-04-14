import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const propTypes = {
  children: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary", "neutral"]),
  to: PropTypes.string,
  as: PropTypes.oneOf(["link", "anchor"]),
  href: PropTypes.string,
  borderFull: PropTypes.bool,
};
const defaultProps = {
  type: "primary",
  as: "link",
};
const Button = ({
  as,
  children,
  type,
  onButtonClick,
  to,
  href,
  target,
  borderFull,
}) => {
  let buttonTypeClass;
  let buttonSpanClass;
  switch (type) {
    case "secondary":
      buttonTypeClass = `${styles.buttonSecondary}`;
      buttonSpanClass = `${styles.buttonSpanSecondary}`;
      break;
    case "neutral":
      buttonTypeClass = `${styles.buttonNeutral}`;
      buttonSpanClass = `${styles.buttonSpanNeutral}`;
      break;
    default:
      buttonTypeClass = `${styles.buttonPrimary}`;
      buttonSpanClass = `${styles.buttonSpanPrimary}`;
      break;
  }
  const className = `${styles.button} ${buttonTypeClass} px-4 ${
    borderFull && "border-4 border-white"
  }`;
  const spanClass = `${styles.buttonSpan} ${buttonSpanClass} ${
    borderFull && "border-0"
  }`;
  return as === "link" ? (
    <Link to={to} className={className} onClick={onButtonClick}>
      <span className={spanClass}>{children}</span>
    </Link>
  ) : (
    <a href={href} className={className} onClick={onButtonClick} target={target}>
      <span className={spanClass}>{children}</span>
    </a>
  );
};
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
