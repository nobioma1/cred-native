import React from 'react';
import {SvgXml} from 'react-native-svg';

const nationality = () => {
  const svg = `<svg width="14" opacity="0.5" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
  <rect x="0.5" y="0.5" width="13" height="7.27273" rx="2.5" stroke="#555555"/>
  <line x1="4.95493" y1="0.59082" x2="4.95493" y2="7.68173" stroke="#555555"/>
  <line x1="9.40986" y1="0.59082" x2="9.40986" y2="7.68173" stroke="#555555"/>
  </g>
  </svg>
  `;
  return <SvgXml xml={svg} />;
};

export default nationality;
