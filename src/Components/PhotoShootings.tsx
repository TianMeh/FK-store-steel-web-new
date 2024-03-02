import { Image } from '@nextui-org/react';
import React from 'react';

function PhotoShootings() {
  return (
    <section className="mt-20 ">
      <div className="flex md:flex-row items-center justify-center gap-10">
        <div className=" flex flex-col">
          <div className="mb-10">
            <h1 className="text-4xl">Fotoshootingi</h1>
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
