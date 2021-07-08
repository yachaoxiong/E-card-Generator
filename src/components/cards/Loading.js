import React, { useState, useEffect } from 'react';
import { useLottie } from 'lottie-react';
import cmLoading from '../../images/christmas-loading.json';
import bdLoading from '../../images/birthday-loading.json';

const Loading = ({ loading }) => {
  const [choice, setChoice] = useState(null);
  const options = {
    animationData: choice,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  useEffect(() => {
    if (loading === 'birthday') {
      setChoice(bdLoading);
    } else if (loading === 'christmas') {
      setChoice(cmLoading);
    }
  }, [loading]);
  return (
    <div
      style={{
        width: 600,
        margin: 0,
        height: 'auto',
        top: '50%',
        left: '50%',
        position: 'absolute',
        marginRight: '-50%',
        transform: 'translate(-50% , -50%)',
      }}
    >
      <div
        style={{
          padding: '20px 50px 50px 50px',
        }}
      >
        {View}
      </div>
    </div>
  );
};

export default Loading;
