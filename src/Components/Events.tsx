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
  const sectionStyle = {
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("/steel-bg-2.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '2rem',
  };

  return (
    <section className="pt-20" style={sectionStyle} id="dogodki">
      <div className={`flex flex-col  items-center justify-center `}>
        <h1 className=" text-4xl">Razstave in Dogodki</h1>
        <p className="mt-6">
          Če bi bilo enostavno in vse po pravilih, bi bilo dolgčas. Nam ni
          nikoli.
        </p>
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-6 mt">
        <div className="flex max-w-[70rem] justify-center items-center flex-wrap gap-6">
          {imgs.map((img) => (
            <Image key={img} alt="Razstava" src={img} className="max-w-80" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
