import React from 'react';
import BaseContainer from './BaseContainer';
import { META_DATA } from '@/constants/Constants';
import AboutUs from '@/Components/AboutUs';
import Events from './Events';
import PhotoShootings from './PhotoShootings';

function HomeLanding() {
  return (
    <BaseContainer meta={META_DATA.DEFAULT}>
      <AboutUs />
      <Events />
      <PhotoShootings />
    </BaseContainer>
  );
}

export default HomeLanding;
