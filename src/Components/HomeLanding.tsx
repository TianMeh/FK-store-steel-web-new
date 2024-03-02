import React from 'react';
import BaseContainer from './BaseContainer';
import { META_DATA } from '@/constants/Constants';
import AboutUs from '@/Components/AboutUs';
import Events from './Events';
import PhotoShootings from './PhotoShootings';
import FifthDimension from './FifthDimension';
import EntryBanner from './EntryBanner';

function HomeLanding() {
  return (
    <BaseContainer meta={META_DATA.DEFAULT}>
      <EntryBanner />
      <AboutUs />
      <Events />
      <PhotoShootings />
      <FifthDimension />
    </BaseContainer>
  );
}

export default HomeLanding;
