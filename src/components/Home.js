import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useHistory } from 'react-router-dom';
import LOGO from '../images/logo.png';
import {
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #cc2b5e 30%,  #753a88 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
const Home = () => {
  const history = useHistory();
  const classes = useStyles();
  const [name, setName] = useState('');
  const [cardType, setCardType] = useState('christmas');
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/ecard?name=${name}&&cardType=${cardType}`);
    window.location.reload();
  };
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '100%',
          top: '40%',
          left: '50%',
          position: 'absolute',
          margin: 0,
          marginRight: '-50%',
          transform: 'translate(-50% , -50%)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <img alt='logo' src={LOGO} />
        </div>
        <div
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        ></div>

        <p style={{ textAlign: 'center', paddingBottom: '56px' }}>
          An E-Card Generator. Send an awesome E-card to your friends.
        </p>

        <form
          noValidate
          autoComplete='off'
          style={{ textAlign: 'center' }}
          onSubmit={onSubmit}
        >
          <TextField
            required
            style={{ padding: '0 20px 0 0' }}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id='standard-basic'
            label='Name on the card'
          />
          <FormControl component='fieldset'>
            <RadioGroup
              style={{
                flexDirection: 'row',
              }}
              value={cardType}
              name='cardType'
              onChange={(e) => {
                setCardType(e.target.value);
              }}
            >
              <FormControlLabel
                value='birthday'
                control={<Radio />}
                label='Birthday Card'
              />
              <FormControlLabel
                value='christmas'
                control={<Radio />}
                label='Christmas Card'
              />
            </RadioGroup>
          </FormControl>
          <Button type='submit' className={classes.root} variant='contained'>
            Generate
          </Button>
        </form>
      </div>
      <a
        rel='noreferrer'
        target='_blank'
        href='https://yachao.vercel.app'
        style={{
          left: '45%',
          bottom: '20px',
          position: 'absolute',
          fontSize: '20px',
          textDecoration: 'none',
          fontWeight: 'bold',
          color: '#476072',
        }}
      >
        Developed By Yachao
      </a>
      <a
        rel='noreferrer'
        target='_blank'
        href='https://github.com/yachaoxiong'
        style={{
          left: '43.5%',
          bottom: '15px',
          position: 'absolute',
          fontSize: '20px',
          textDecoration: 'none',
          fontWeight: 'bold',
          color: '#476072',
        }}
      >
      < GitHubIcon/>
      </a>
    </div>
  );
};

export default Home;
