import React, { useEffect, useRef } from 'react';
import animationData from "../lottiAnimations/contact.json";

const LottieAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    let anim;

    const loadAnimation = async () => {
      const Lottie = (await import('lottie-web')).default;

      anim = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    };

    if (animationContainer.current) {
      loadAnimation();
    }

    return () => {
      if (anim) anim.destroy();
    };
  }, []);

  return <div ref={animationContainer}></div>;
};

export default LottieAnimation;