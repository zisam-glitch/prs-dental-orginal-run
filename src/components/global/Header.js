import React, { useState, useEffect } from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Topbar from "./Topbar";
import MobileMenu from "./MobileMenu";
import { Button } from "@material-tailwind/react";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <header>
      <Topbar />
      <div className="flex justify-between items-center container mx-auto px-2 py-6 xl:py-0">
        <Logo />

        <div className="flex items-center">
          <Navigation />
          <div>
          <a
            href="tel:01133228354"
            className="mr-2  font-medium text-gray-600 ml-3 block xl:hidden "
          >
            <Button
              variant="outlined"
              className=" flex mb3p red pd-0 items-center text-sm px-1.5 whitespace-nowrap"
            >
             0113 322 8354 - Pvt.
            </Button>
          </a>
          <a
            href="tel:01132638509"
            className="mr-2  font-medium text-gray-600 ml-3 block xl:hidden "
          >
            <Button
              variant="outlined"
              className=" flex vlue pd-0 items-center text-sm px-1.5 whitespace-nowrap"
            >
             0113 263 8509 - NHS
            </Button>
          </a>
          </div>

          <Burger open={openDrawer} setOpen={setOpenDrawer} />
        </div>
      </div>

      <MobileMenu open={openDrawer} setOpen={setOpenDrawer} />
    </header>
  );
};

export default Header;
