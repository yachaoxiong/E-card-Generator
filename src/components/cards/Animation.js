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
        maxWidth: 580,
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
        <h1 className='card-title'>Hi,</h1>
        <div className='letterIcon' onClick={() => window.location.reload()}>
          {res.View}
        </div>

        <div className='card-username'>{name}</div>
        <h1
          className='card-title'
          style={{
            textAlign: 'center',
            fontSize: '3rem',
          }}
        >
          {config.title}
        </h1>
        <div style={{ maxWidth: 300, textAlign: 'cente' }}>{View}</div>
      </div>
    </div>
  );
};

export default Animation;
