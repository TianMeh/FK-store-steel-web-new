import { Image } from '@nextui-org/react';
import React from 'react';

function EntryBanner() {
  const sectionStyle = {
    backgroundImage: 'url("/steel-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <section style={sectionStyle}>
      <div className=" h-screen flex justify-center items-center" />
    </section>
  );
}

export default EntryBanner;
