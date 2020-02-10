import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div className='spinner-container'>
      <Loader
        type='TailSpin'
        color='#00BFFF'
        height={100}
        width={100}
      />
    </div>
  );
}
