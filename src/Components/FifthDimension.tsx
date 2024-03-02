import { SOCIAL_LINK } from '@/constants/Constants';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';

function FifthDimension() {
  const sectionStyle = {
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("/bike-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section style={sectionStyle} id="peta-dimenzija">
      <div className="px-10 p-20 md:p-20">
        <div className="flex md:flex-row flex-col items-center justify-center gap-20">
          <div className="flex flex-col gap-6">
            <div className="flex md:flex-row flex-col gap-2 justify-between">
              <div className=" md:text-left text-center">
                <h1 className="text-4xl pb-4">Peta Dimenzija</h1>
                <p className=" md:max-w-[80%]">
                  Ko fotografija sama ni dovolj, ko zmanjka idej, ko potrebujemo
                  dodaten naboj čiste energije…
                  <br />
                  …poiščemo družbo modelov PETE DIMENZIJE, pridruži se jim še
                  ti!
                </p>
                <div className="flex flex-row gap-2 mt-3 justify-center md:justify-normal">
                  <Link href={SOCIAL_LINK.FACEBOOK} target="_blank">
                    <CiFacebook size={30} />
                  </Link>
                  <Link href={SOCIAL_LINK.INSTAGRAM} target="_blank">
                    <FaInstagram size={30} />
                  </Link>
                </div>
              </div>
              <div className=" text-center">
                <br />
                »IN TISTE, KI SO JIH VIDELI PLESATI,
                <br />
                SO IMELI ZA NORE TISTI,
                <br />
                KI NISO SLIŠALI GLASBE!«
                <br />
                <div className="text-right pt-1">
                  <p>-Nietzsche</p>
                </div>
              </div>
            </div>
            <Image
              alt="Peta dimenzija"
              src="/fifth-dimension-img-1.jpg"
              className=" max-h-[50vh]"
            />
          </div>
          <div>
            <Image
              alt="Peta dimenzija"
              src="/fifth-dimension-img-2.jpg"
              className=" max-h-[70vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FifthDimension;
