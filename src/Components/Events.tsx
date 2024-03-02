import { Image } from '@nextui-org/react';
import React from 'react';

function Events() {
  const imgs = [
    'r-1.jpg',
    'r-2.jpg',
    'r-3.jpg',
    'r-4.jpg',
    'r-5.jpg',
    'r-6.jpg',
  ];
  return (
    <section className="mt-20">
      <div className={`flex flex-col  items-center justify-center `}>
        <h1 className=" text-4xl">Razstave in Dogodki</h1>
        <p className="mt-6">
          Če bi bilo enostavno in vse po pravilih, bi bilo dolgčas. Nam ni
          nikoli.
        </p>
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-6 mt-6">
        {imgs.map((img) => (
          <Image key={img} alt="Razstava" src={img} className="max-w-80" />
        ))}
      </div>
    </section>
  );
}

export default Events;
