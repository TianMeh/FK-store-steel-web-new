import React from 'react';
import BaseContainer from './BaseContainer';
import { META_DATA } from '@/constants/Constants';
import AboutUs from '@/Components/AboutUs';

function HomeLanding() {
  return (
    <BaseContainer meta={META_DATA.DEFAULT}>
      <AboutUs />
    </BaseContainer>
  );
}

export default HomeLanding;
