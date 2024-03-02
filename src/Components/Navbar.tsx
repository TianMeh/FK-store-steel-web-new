import React, { useState } from 'react';

import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Image,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { EMAIL_ADDRESS, NAVBAR_ITEM } from '@/constants/Constants';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(isMenuOpen);

  return (
    <NextUiNavbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            alt="Logo"
            src={'/fk-st-logo-mini.jpg'}
            width={120}
            className=" rounded-sm"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NAVBAR_ITEM.map((item) => {
          return (
            <NavbarItem key={item.name}>
              <Link
                className="cursor-pointer text-sm text-gray-100"
                href={item.href}
              >
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href={`mailto:${EMAIL_ADDRESS.BRIGITKA}`}
            variant="flat"
          >
            Kontakt
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* Mobile */}
      <NavbarMenu>
        {NAVBAR_ITEM.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-gray-100 text-sm"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
}

export default Navbar;
