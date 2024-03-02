import { Image } from '@nextui-org/react';
import React from 'react';

function PhotoShootings() {
  const sectionStyle = {
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("/flower-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section style={sectionStyle} id="fotoshootingi">
      <div className="px-10 py-20 md:p-20 text-center md:text-left">
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
              src="/fotoshooting-img-1.jpg"
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
      </div>
    </section>
  );
}

export default PhotoShootings;
