import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export type types = {
  children: ReactNode;
};

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

export default function ContentLayout({ children }: types) {
  const ref = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    Scrollbar.use(DisableScrollPlugin);
    gsap.registerPlugin(ScrollTrigger);

    const scroll = Scrollbar.init(ref.current, {
      damping: 0.1,
      plugins: {
        disableScroll: {
          direction: "x",
        },
      },
    });

    scroll.track.xAxis.element.remove();
    scroll.track.yAxis.element.remove();

    if (pathname === "/") {
      ScrollTrigger.scrollerProxy(ref.current, {
        scrollTop(value) {
          if (arguments.length) {
            scroll.scrollTop = Number(value);
          }
          return scroll.scrollTop;
        },
      });

      scroll.addListener(ScrollTrigger.update);

      ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        scroller: ref.current,
      });

      gsap.to("#horizontalSlider", {
        x: -(408 * (6 - ref.current?.offsetWidth / 464)),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: "#horizontalSlider",
          pin: true,
          scrub: 0.6,
          end: "100% 10%",
        },
      });

      gsap.to("#verticalSlider", {
        x: -(1344 * (3 - ref.current?.offsetWidth / 1344) + 200),
        ease: "none",
        scrollTrigger: {
          start: "top 200",
          trigger: "#verticalSlider",
          pin: true,
          scrub: 0.6,
          end: "100% 10%",
        },
      });
    }
  }, [pathname]);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      {children}
    </div>
  );
}
