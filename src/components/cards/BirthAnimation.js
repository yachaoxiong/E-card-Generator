import React from 'react';
import { useLottie } from 'lottie-react';
import webAnitmation from '../../images/christmas-tree.json';
const BirthAnimation = () => {
  const options = {
    animationData: webAnitmation,
    loop: true,
    autoplay: true,
  };
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
      <div
        style={{
          background: '#FAEBE0',
          padding: '20px 50px 50px 50px',
          borderRadius: 5,
          boxShadow: 'rgb(0 0 0 / 18%) 0px 5px 20px 0px',
        }}
      >
        <h1
          className='card-title'
          style={{
            fontSize: '3.3rem',

            // color: 'white',
          }}
        >
          Hi,
        </h1>
        <div className='card-username'>Eric</div>
        <h1
          className='card-title'
          style={{
            paddingBottom: '50px',
            textAlign: 'center',
            fontSize: '3.3rem',

            // color: 'white',
          }}
        >
          Happy Birthday
        </h1>
        {View}
      </div>
    </div>
  );
};

export default BirthAnimation;
