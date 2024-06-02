import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Typed from "typed.js";
import clsx from "clsx";
import styles from "./Hero.module.scss";

const TYPED_STRINGS = [
  "A pragmatic Software Engineer.",
  "Cloud-native and open-source enthusiast.",
];
const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const HomepageHero = () => {
  const [lottie, setLottie] = useState(null);

  const typedElementRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);

    return () => typed.destroy();
  }, [typedElementRef]);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../../static/lottie/lottie.json"),
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="mb-8">
          <h1 className={clsx("hero__title", styles.title)}>
            Hi. I'm <span className={styles.highlighted}>Yen Mai</span>,
            <br />
            Full-stack Cloud Developer.
          </h1>
          <p className={clsx("hero__subtitle", styles.subtitle)}>
            Software engineer interested in personal growth and tech trends.
            <br /> <span ref={typedElementRef} />
          </p>
        </div>
        <div ref={lottieRef} />
      </div>
    </header>
  );
};

export default HomepageHero;
