import React from 'react';

import { SOCIAL_LINK } from '@/constants/Constants';

import { BsFacebook, BsInstagram } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" bg-gr-blue text-white py-8 ">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mt-2">
          <ul className="flex space-x-4">
            <li>
              <Link
                target="_blank"
                href={SOCIAL_LINK.FACEBOOK_ST}
                color="foreground"
              >
                <BsFacebook size={25} />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={SOCIAL_LINK.INSTAGRAM}
                color="foreground"
              >
                <BsInstagram size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs mt-8">
        &copy; {new Date().getFullYear()} Foto Klub Štore Steel. Vse pravice
        pridržane.
      </div>
    </footer>
  );
};

export default Footer;
