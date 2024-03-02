import { EMAIL_ADDRESS, SOCIAL_LINK } from '@/constants/Constants';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { CiFacebook } from 'react-icons/ci';

function AboutUs() {
  return (
    <section className=" mt-10">
      <div
        className={`flex flex-col md:flex-row items-center justify-center xl:h-[90%] m:h-[90%] gap-[15%] bg-gr-blue `}
      >
        <Image
          alt="O Nas"
          src="/o-nas.jpg"
          width={400}
          className=" max-w-36 sm:max-w-none"
        />
        <div className=" text-center max-w-[25rem] text-small md:text-medium">
          <h1 className="text-left md:text-4xl mb-4">O Nas</h1>
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
            <Link href={SOCIAL_LINK.FACEBOOK}>
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
