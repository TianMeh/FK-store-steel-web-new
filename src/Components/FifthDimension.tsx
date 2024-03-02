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
    padding: '2rem',
  };

  return (
    <section className="pt-20" style={sectionStyle} id="peta-dimenzija">
      <div className="flex sm:flex-row flex-col items-center justify-center gap-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-11 justify-between">
            <div>
              <h1 className="text-4xl pb-4">Peta Dimenzija</h1>
              <p className=" max-w-[60%]">
                Ko fotografija sama ni dovolj, ko zmanjka idej, ko potrebujemo
                dodaten naboj čiste energije…
                <br />
                …poiščemo družbo modelov PETE DIMENZIJE, pridruži se jim še ti!
              </p>
              <div className="flex flex-row gap-2 mt-3">
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
            </div>
          </div>
          <Image
            alt="Peta dimenzija"
            src="/fifth-dimension-1.jpg"
            className=" max-h-[50vh]"
          />
        </div>
        <div>
          <Image
            alt="Peta dimenzija"
            src="/fifth-dimension-2.jpg"
            className=" max-h-[65vh]"
          />
        </div>
      </div>
    </section>
  );
}

export default FifthDimension;
