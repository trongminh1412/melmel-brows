import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Logo from '@/public/assets/images/header/logo.svg';
import menu from '@/utils/config/menu.json';
import React from 'react';

import style from './Navbar.module.scss';


const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const { listNav } = menu;

  return (
    <>
      <header className="sticky top-0 z-[100] border-gray-200 bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={Logo}
              className={style.logoHeader}
              alt="Melmel-logo"
              width={200}
              height={100}
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"></span>
          </a>
          <button
            id="show-button"
            className="order-2 flex cursor-pointer items-center md:order-1 lg:hidden"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <svg className="h-10 fill-current" viewBox="0 0 20 20">
                <title>Menu Open</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                />
              </svg>
            ) : (
              <svg className="h-10 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
              </svg>
            )}
          </button>
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul
              className={`${style.navLink} block w-full md:w-auto lg:flex lg:space-x-2`}
            >
              {listNav.map((item, idx) => (
                <li className="flex items-center pr-6" key={idx}>
                  <Link
                    href="#"
                    className={` block rounded px-3 py-2 font-medium text-[#272B2F] md:bg-transparent md:p-0`}
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden w-full items-center lg:block lg:w-auto">
            <button
              type="button"
              className="me-2 rounded-lg border border-gray-200 bg-[#E6DDD0] px-5 py-2.5 text-4xl font-medium text-[#66491C] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 "
            >
              Đặt lịch ngay
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="block w-full lg:hidden lg:w-auto" id="navbar-default">
            <ul className="navbar-nav block w-full md:w-auto lg:flex lg:space-x-2">
              {listNav.map((item, idx) => (
                <li className="flex items-center pl-4" key={idx}>
                  <Link
                    href="#"
                    className="navLink block rounded px-3 py-2 font-normal text-[#272B2F] md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="flex items-center justify-center p-2 text-center">
                <button
                  type="button"
                  className="w-80 rounded-lg border border-gray-200 bg-[#E6DDD0] px-5 py-2.5 font-medium text-[#66491C] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 "
                >
                  Đặt lịch ngay
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
