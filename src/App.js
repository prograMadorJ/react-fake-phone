import React from 'react';
import MobilePhone from './components/MobilePhone';
import './style.css';

export default function FakePhone() {
  return (
    <>
      <MobilePhone></MobilePhone>
      <small style={{ display: 'block' }}>
        toggle click on the center button
      </small>
    </>
  );
}
