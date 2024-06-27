'use client';
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import authSelectors from "../../../../Store/auth/Selector";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import authActions from "../../../../Store/auth/actions";
import {useDispatch} from "react-redux";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";


const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#df95fc",
    lag: 0,
};


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const accesToken = authSelectors.AccessToken();
  const [getAccessToken,setAccessToken] = useState<string>()
  const dispatch = useDispatch();

  const HandleLogout = () =>{
      dispatch(authActions.resetState() as any);
      location.reload();
  }

  useEffect(() => {
    const aTags = Array.from(document.querySelectorAll("a"));

    aTags.forEach((tag) => {
      tag.addEventListener("click", closeNav);
    });

    function closeNav() {
      setIsOpen(false);
    }

    if(typeof accesToken === "string" )
        setAccessToken(accesToken)

    return () => {
      aTags.forEach((tag) => {
        tag.removeEventListener("click", closeNav);
      });
    };

  }, [accesToken]);

  return (
    <header className="header" data-header>
      <div className={`container_bg ${isOpen ? "navMobOpen" : ""}`}>
        <Link href="/" className="logo">
          <Image src="/images/favicon.webp" alt="#" className="logo-img" width={50} height={50} />
          <span id="ignitiaFont" className="span ignitiaFont">
            Ignitia
          </span>
          <span id="digitalFont" className="span digitalFont">'24</span>
        </Link>

        <nav className={`navbar`} data-navbar>
          <div className={`navWrapper`}>
          <ul className="navbar-list">
              <li>
                <Link
                    href="/"
                    className="navbar-link"
                    data-nav-link
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="navbar-link" data-nav-link>
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="navbar-link" data-nav-link>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="navbar-link" data-nav-link>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="navbar-link" data-nav-link>
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/team" className="navbar-link" data-nav-link>
                  Teams
                </Link>
              </li>
              {
                  getAccessToken ? (
                      <Dropdown>
                          <DropdownTrigger>
                              <Button isIconOnly
                                  variant="bordered"
                              >
                                  <div className="min-w-[30px] min-h-[30px] p-2 flex justify-center items-center btn-secondary rounded-2xl">
                                      <i className="fi fi-sr-user"></i>
                                  </div>
                              </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                              aria-label="Action event example"
                              className={`text-black`}
                          >
                              <DropdownItem key="dashboard">
                                  <Link href={"/dashboard"}>
                                      Dashboard
                                  </Link>
                              </DropdownItem>
                              <DropdownItem key="logout" onClick={HandleLogout}>
                                  Logout
                              </DropdownItem>
                          </DropdownMenu>
                      </Dropdown>
                  ) : (
                      <Link href="/auth" className="btn btn-secondary">
                        Login
                      </Link>
                  )
              }
            </ul>
          </div>
        </nav>
        <button
          className="nav-open-btn"
          aria-label="open menu"
          data-nav-toggler
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
      <div style={{ zIndex: 1000 }}>
                <MouseTrail {...trailProps} />
            </div>
    </header>
  );
};

export default Navbar;
