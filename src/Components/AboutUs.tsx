import { EMAIL_ADDRESS, SOCIAL_LINK } from '@/constants/Constants';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { CiFacebook } from 'react-icons/ci';

function AboutUs() {
  const sectionStyle = {
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("/roza.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section style={sectionStyle} id="o-nas">
      <div
        className={`flex flex-col md:flex-row items-center justify-center lg:gap-[10rem] gap-6 p-20`}
      >
        <Image
          alt="O Nas"
          src="/about.jpg"
          width={400}
          className="max-w-[14rem] md:max-w-none"
        />
        <div className=" text-center max-w-[38rem] text-small md:text-medium">
          <h1 className=" lg:text-4xl text-2xl lg:mb-4 mb-2 md:text-left ">
            O Nas
          </h1>
          <p className="md:text-left">
            Zbralo se nas je 11, ki radi fotografiramo: Fredi, Barbara, Blaž,
            Sebastijan, Simon, Rosvita, Matjaž, Klara, Kristijan, Brigita in
            Milan.
            <br />
            <span>VSAK ZASE, A VENDAR VSI SKUPAJ!</span>
            <br />
            <br />
          </p>
          <div>
            <p className="pb-2">Fotografiramo:</p>
            <p>
              KER ŽELIMO,
              <br />
              KAR ŽELIMO,
              <br />
              KO ŽELIMO,
              <br />
              KJER ŽELIMO,
              <br />
              KADAR ŽELIMO,
              <br />
              KAKOR ŽELIMO,
            </p>
          </div>
          <br />
          včasih po pravilih, včasih mimo njih, vsekakor pa izven okvirjev!
          Zakaj? KER LAHKO! In ker #MISEMAMOVEDNOFAJN!
          <div className=" flex items-center justify-center mt-3 mb-2">
            <Link href={SOCIAL_LINK.FACEBOOK_ST}>
              <CiFacebook size={30} />
            </Link>
          </div>
          Pridruži se nam, da razbijemo magično številko 11, piši nam:{' '}
          <Link href={`mailto:${EMAIL_ADDRESS.BRIGITKA}`}>
            <span className=" underline">brigita.koklic@store-steel.si</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
