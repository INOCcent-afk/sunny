import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="flex flex-wrap gap-14 max-w-7xl px-10 py-14 mx-auto md:flex-nowrap md:gap-5">
        <div className="basis-full flex flex-col gap-5 md:basis-3/12">
          <Link href="/">
            <a className="font-bold text-darkFont text-2xl md:text-4xl">
              Mairala
            </a>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa porro
            facilis aspernatur atque in nisi!
          </p>
        </div>

        <div className="basis-full flex flex-col gap-5 md:basis-3/12">
          <h5>RECENT POSTS</h5>
          <ul className="flex flex-col gap-6">
            <li className="border-b border-gray pb-6">
              <span className="text-sm text-gray">March 30, 2014</span>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li className="border-b border-gray pb-6">
              <span className="text-sm text-gray">March 30, 2014</span>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li className="border-b border-gray pb-6">
              <span className="text-sm text-gray">March 30, 2014</span>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
          </ul>
        </div>
        <div className="basis-full flex flex-col gap-5 md:basis-3/12">
          <h5>TWITTER FEEDS</h5>
          <ul className="flex flex-col gap-6">
            <li className="border-b border-gray pb-6">
              <span className="text-gray">
                March 30, 2014
                <span className="text-darkFont"> @kristianplatt</span>
              </span>
              <p>Good work buddy</p>
            </li>
            <li className="border-b border-gray pb-6">
              <span className="text-gray">
                March 30, 2014
                <span className="text-darkFont"> @kristianplatt</span>
              </span>
              <p>Good work buddy</p>
            </li>
            <li className="border-b border-gray pb-6">
              <span className="text-gray">
                March 30, 2014
                <span className="text-darkFont"> @kristianplatt</span>
              </span>
              <p>Good work buddy</p>
            </li>
          </ul>
        </div>
        <div className="basis-full flex flex-col gap-5 md:basis-3/12">
          <h5>OUR ADDRESS</h5>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem quo omnis esse! Ut nihil odit necessitatibus id eos,
            nulla animi.
          </p>

          <ul className="mt-14 text-gray">
            <li>Moonshine St. 14/05 Light, Jupiter</li>
            <li>+00 (123) 456 78 90</li>
            <li>first.last@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="bg-darker text-center text-gray p-8">
        @2014 Imran khan All Rights Reserved
      </div>
    </footer>
  );
};
