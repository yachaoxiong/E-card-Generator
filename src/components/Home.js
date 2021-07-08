import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

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
  const [cardType, setCardType] = useState('birthday');
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
        <div
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          E-Gife Card Generator
        </div>

        <p style={{ textAlign: 'center', paddingBottom: '56px' }}>
          Send an awesome E-Christmas card or E-birthday card to your friends.
        </p>

        <form
          style={{ zIndex: 9999 }}
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
            label='Set up a name'
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
        target='_blank'
        href='https://ericxiong.herokuapp.com/'
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
    </div>
  );
};

export default Home;