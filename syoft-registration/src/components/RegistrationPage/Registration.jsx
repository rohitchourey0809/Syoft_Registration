import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  CheckboxGroup,
} from '@chakra-ui/react';
import axios from 'axios';
import './Registation.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [mobile, setmobile] = useState('');
  const [role, setrole] = useState('');
  //   const [checkedItems, setCheckedItems] = React.useState([false, false]);

  //   const allChecked = checkedItems.every(Boolean);
  //   const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  const navigate = useNavigate();
  async function Signup(e) {
    if (
      firstname === '' &&
      lastname === '' &&
      email === '' &&
      password === '' &&
      mobile === '' &&
      role === ''
    ) {
      //   navigate('/login');
      return alert('Please enter your first name');
    } else {
      const payload = await {
        FIRSTNAME: firstname,
        LASTNAME: lastname,
        EMAIL: email,
        PASSWORD: password,
        MOBILE: mobile,
        ROLE: role,
      };
      axios
        .post('https://syoftapiproject.herokuapp.com/register', payload)
        .then(response => {
          console.log(response.data);
          alert(
            `SignUp Successful ${response.data.FIRSTNAME}  -${response.status}`
          );
          navigate('/login');
        })
        .catch(error => {
          console.log('ErrorSignup', error);
        });
    }
  }
  return (
    <>
      <Stack className="Registration">
        <Box>
          <FormControl isRequired>
            <Box id="FULLDIV">
              <Box id="head">
                <Text id="custo">CREATE ACCOUNT</Text>
              </Box>

              <hr />
              <Box id="signcontainer">
                <FormLabel id="headingname">FIRST NAME</FormLabel>

                <Input
                  isRequired
                  value={firstname}
                  name="firstname"
                  onChange={e => setfirstname(e.target.value)}
                  type="text"
                  id="fname"
                  placeholder="First Name"
                  className="inputsize"
                />
                <br />
                <br />

                <FormLabel id="headingname">LAST NAME</FormLabel>

                <Input
                  Required="true"
                  value={lastname}
                  name="lastname"
                  onChange={e => setlastname(e.target.value)}
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  className="inputsize"
                />

                <br />

                <br />

                <FormLabel id="headingname">EMAIL</FormLabel>

                <Input
                  value={email}
                  name="email"
                  onChange={e => setemail(e.target.value)}
                  type="email"
                  id="emailinp"
                  placeholder="Email"
                  className="inputsize"
                />
                <br />
                <br />

                <FormLabel id="headingname">PASSWORD</FormLabel>

                <Input
                  value={password}
                  name="password"
                  onChange={e => setpassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  className="inputsize"
                />
                <br />
                <FormLabel id="headingname">Mobile</FormLabel>

                <Input
                  value={mobile}
                  name="mobile"
                  onChange={e => setmobile(e.target.value)}
                  type="number"
                  id="roleinp"
                  placeholder="Mobile"
                  className="inputsize"
                />
                <br />
                <FormLabel id="headingname">ROLE</FormLabel>
                <CheckboxGroup
                  colorScheme="green"
                  //   value="role"
                  //   onChange={e => setrole(e.target.value)}
                >
                  <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox
                      value="Admin"
                      onChange={e => setrole(e.target.value)}
                    >
                      Admin
                    </Checkbox>
                    <Checkbox
                      value="Manager"
                      onChange={e => setrole(e.target.value)}
                    >
                      Manager
                    </Checkbox>
                    <Checkbox
                      value="Staff"
                      onChange={e => setrole(e.target.value)}
                    >
                      Staff
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
                <br />
                {/* <Link> */}
                <Button
                  onClick={e => Signup(e)}
                  id="buttonsign"
                  type="submit"
                  variant={'ghost'}
                >
                  SIGN UP
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
                  <Link to={'/login'} id="logina">
                    LOGIN
                  </Link>
                </Box>
              </Box>
            </Box>
          </FormControl>
        </Box>
      </Stack>
    </>
  );
};
