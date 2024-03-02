import { Image } from '@nextui-org/react';
import React from 'react';

function PhotoShootings() {
  const sectionStyle = {
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("/flower-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '2rem',
  };

  return (
    <section className="pt-20" style={sectionStyle} id="fotoshootingi">
      <div className="flex md:flex-row items-center justify-center gap-10">
        <div className=" flex flex-col">
          <div className="mb-10">
            <h1 className="text-4xl pb-4">Fotoshootingi</h1>
            <p>
              Nikdar isti, nikdar enostavni, vedno drugačni in preprosto -
              zabavni.
            </p>
          </div>
          <Image
            alt="Fotoshootingi"
            src="/fotoshooting-1.jpg"
            className=" max-h-[50vh]"
          />
        </div>
        <div className="hidden sm:flex">
          <Image
            src="fotoshooting-2.jpg"
            alt="Fotoshootingi"
            className=" max-h-[50vh]"
          />
        </div>
      </div>
      <Image
        src="fotoshooting-2.jpg"
        alt="Fotoshootingi"
        className=" max-h-[50vh] sm:hidden mt-8"
      />
    </section>
  );
}

export default PhotoShootings;
