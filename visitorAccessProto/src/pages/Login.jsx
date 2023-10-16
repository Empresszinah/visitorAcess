import React, { useState } from 'react';
import InputBox from '../components/Input/InputBox';
import { LoginUser } from '../services/authApi/LoginApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/authSlice';

const Login = () => {
  const [serviceNumber, setServiceNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { serviceNumber, password };
    // console.log(formData);
    try {
      const response = await LoginUser(formData);
      const token = response?.token;
      const user = response?.user;
      //   console.log(name);
      dispatch(setToken(token));
      dispatch(setUser(user));

      navigate('/');
    } catch (error) {
      console.log(error);
    }
    setPassword('');
    setServiceNumber('');
  };
  return (
    <section className='h-full bg-neutral-200 dark:bg-neutral-700'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-8'>
          {/* <InputBox
            label={'Service Number'}
            placeholder={'Service Number'}
            type={'text'}
          />
          <InputBox
            label={'Password'}
            placeholder={'*****'}
            type={'password'}
          /> */}
          <div className='flex flex-col gap-4'>
            <label htmlFor='serviceNumber' className=''>
              Service Number
            </label>
            <input
              type='text'
              name='serviceNumber'
              id='ServiceNumber'
              placeholder={'Service Number'}
              value={serviceNumber}
              onChange={(e) => setServiceNumber(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='password' className=''>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder={'*****'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
