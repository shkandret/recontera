import React, { ReactNode, useRef, useEffect } from "react";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

import styles from "./HorizontalScroll.module.scss";

interface HorizontalScrollProps {
  children: ReactNode;
}

class DisableScrollPlugin extends ScrollbarPlugin {
  static pluginName = "disableScroll";

  static defaultOptions = {
    direction: "",
  };

  transformDelta(delta: any) {
    if (this.options.direction) {
      delta[this.options.direction] = 0;
    }

    return { ...delta };
  }
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    Scrollbar.use(DisableScrollPlugin);
    const scroll = Scrollbar.init(ref.current, {
      damping: 0.1,
      plugins: {
        disableScroll: {
          direction: "y",
        },
      },
    });
    scroll.track.yAxis.element.remove();
  }, []);

  return (
    <div ref={ref} className={styles.horizontalScroll}>
      {children}
    </div>
  );
};

export default HorizontalScroll;
