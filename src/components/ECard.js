import React, { useState, useEffect } from 'react';
import Animation from './cards/Animation';
import SnowBg from './cards/SnowBg';
import Bubble from './cards/Bubble';
import Loading from './cards/Loading';
import { useLocation } from 'react-router-dom';

// import Particles from 'react-particles-js';
// import snow from '../images/snow.png';
const NewCard = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  let currentName = searchParams.get('name');
  let currentType = searchParams.get('cardType');
  const [cardType, setCardType] = useState('');
  const [name, setName] = useState('');
  const [playAnimation, setPlayAnimation] = useState(false);
  const renderCard = () => {
    if (playAnimation) {
      return <Loading loading={cardType} />;
    } else {
      return <Animation cardSetting={cardType} name={name} />;
    }
  };
  const renderBg = () => {
    if (cardType === 'birthday') return <Bubble />;
    return <SnowBg />;
  };

  useEffect(() => {
    setName(currentName);
    setCardType(currentType);

    setPlayAnimation(true);
    let timer1 = setTimeout(() => setPlayAnimation(false), 1250);
    return () => {
      clearTimeout(timer1);
    };
  }, [currentName, currentType]);

  return (
    <div className='App' style={{ height: '100vh' }}>
      {renderCard()}
      {renderBg()}
    </div>
  );
};

export default NewCard;
