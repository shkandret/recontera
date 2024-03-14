import { useState, useEffect } from "react";

import styles from "./Tooltip.module.scss";

interface TooltipProps {
  text: any;
  children: React.ReactElement;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleTouch = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const tooltipContainer = document.querySelector(
      `.${styles["tooltip-container"]}`
    );
    if (tooltipContainer && !tooltipContainer.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={styles["tooltip-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouch}
    >
      {children}
      {isVisible && <div className={styles["tooltip"]}>{text}</div>}
    </div>
  );
};

export default Tooltip;
