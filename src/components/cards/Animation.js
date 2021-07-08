import React, { useState, useEffect } from 'react';
import { useLottie } from 'lottie-react';
import webAnitmation from '../../images/christmas-tree.json';
import playAnimation from '../../images/play-button-cmyk.json';
import HappyBd from '../../images/happy-birthday.json';

const Animation = ({ cardSetting, name }) => {
  const [config, setConfig] = useState({});

  useEffect(() => {
    if (cardSetting === 'birthday') {
      setConfig({
        animationData: HappyBd,
        title: 'Happy Birthday',
      });
    } else {
      setConfig({
        animationData: webAnitmation,
        title: 'Merry Christmas',
      });
    }
  }, [cardSetting]);

  const options = {
    animationData: config.animationData,
    loop: true,
    autoplay: true,
  };
  const emailOptions = {
    animationData: playAnimation,
    loop: true,
    autoplay: true,
  };
  const res = useLottie(emailOptions);
  const { View } = useLottie(options);
  return (
    <div
      style={{
        width: 600,
        height: 'auto',
        top: '50%',
        left: '50%',
        position: 'absolute',
        margin: 0,
        marginRight: '-50%',
        transform: 'translate(-50% , -50%)',
      }}
    >
      <div className='card'>
        <div>
          <h1
            className='card-title'
            style={{
              fontSize: '3.3rem',
            }}
          >
            Hi,
          </h1>
          <div className='letterIcon' onClick={() => window.location.reload()}>
            {res.View}
          </div>
          {/* <div className='letterHint'>OPEN ME</div> */}
          <div className='card-username'>{name}</div>
          <h1
            className='card-title'
            style={{
              paddingBottom: '10px',
              textAlign: 'center',
              fontSize: '3.3rem',
            }}
          >
            {config.title}
          </h1>
          {View}
        </div>
      </div>
    </div>
  );
};

export default Animation;
