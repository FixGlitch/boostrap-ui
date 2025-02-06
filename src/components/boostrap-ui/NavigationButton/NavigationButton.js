import React from 'react';
import Image from 'next/image';
import styles from './NavigationButton.module.css';

const NavigationButton = ({ direction, className, imgSrc }) => (
  <div className={className}>
    <Image src={imgSrc} alt={`${direction}Arrow`} width={40} height={40} />
  </div>
);

export default NavigationButton;
