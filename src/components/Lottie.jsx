import React, { useEffect, useRef } from 'react';

const Lottie = ({ animationData, className = '' }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    let anim;
    import('lottie-web').then((Lottie) => {
      anim = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });
    });

    return () => {
      if (anim) anim.destroy();
    };
  }, [animationData]);

  return <div className={className} ref={animationContainer}></div>;
};

export default Lottie;
