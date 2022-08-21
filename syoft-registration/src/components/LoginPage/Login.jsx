import '../RegistrationPage/Registration';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';

export const Login = () => {
  const [email, setemail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  async function login(e) {
    if (email === '' && password === '') {
      navigate('/login');
      return alert('Enter email and Password');
    } else {
      const payload = {
        EMAIL: email,
        PASSWORD: password,
      };
      axios
        .post('http://localhost:8080/login', payload)
        .then(response => {
          alert(`login Successful  -${response.status}`);
          navigate('/product');
        })
        .catch(error => {
          console.log('ErrorSignup', error);
        });
    }
  }
  return (
    <Box>
      <FormControl isRequired>
        <Box id="FULLDIV">
          <Box id="head">
            <Text id="custo">CUSTOMER LOGIN</Text>
          </Box>

          <hr />
          <Box id="signcontainer">
            <FormLabel id="headingname">EMAIL</FormLabel>
            <br />
            <Input
              type="email"
              id="email"
              onChange={e => setemail(e.target.value)}
              placeholder="Email"
              className="inputsize"
            />
            <br />
            <br />

            <FormLabel id="headingname">PASSWORD</FormLabel>
            <br />
            <Input
              id="password"
              value={password}
              onChange={e => setpassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="inputsize"
            />
            <br />
            <br />
          </Box>
          <br />
          {/* <Link to={'/'}> */}
          <Button onClick={() => login()} id="buttonlogin">
            LOG IN
          </Button>
          {/* </Link> */}
          <br />
          <Box
            style={{
              margin: 'auto',
              textAlign: 'center',
              color: 'gold',
              fontWeight: 'bold',
            }}
          >
            <Text>RETURNING CUSTOMER?</Text>
            <Link to={'/register'} id="logina">
              SIGNUP
            </Link>
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
};
