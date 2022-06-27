import Image from "next/image";
import React, { FC } from "react";

interface BlogItemProps {
  reverse?: boolean;
}

export const BlogItem: FC<BlogItemProps> = ({ reverse = false }) => {
  return (
    <div
      className={`flex flex-col px-10 md:px-0 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8`}
    >
      <div className="relative h-[250px] md:h-[200px] md:flex-1">
        <Image
          className="pointer-events-none"
          src="/images/night.jpg"
          layout="fill"
          objectFit="cover"
          alt="winter"
        />
      </div>
      <div
        className={`flex-1 flex flex-col gap-1  ${
          reverse ? "md:text-right" : ""
        }`}
      >
        <span className="text-darkFont">10 April 2014</span>
        <h3 className="text-lg">Lorem ipsum dolor sit amet.</h3>
        <p className="text-sm text-gray">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla
          ullam aliquam autem exercitationem ut ipsum magni dolore placeat
          totam!
        </p>
      </div>
    </div>
  );
};
