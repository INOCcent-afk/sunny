import React from "react";
import { BlogItem } from "./BlogItem";

export const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col gap-10 text-center max-w-sm mx-auto">
        <h3 className="text-3xl pb-4 md:text-5xl text-darkFont border-b-4 text-center w-fit mx-auto border-darkFont mb-[-4px]">
          Our Blog
        </h3>
        <p className="text-sm text-darkFont">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="flex flex-col gap-20 mt-20">
        <BlogItem />
        <BlogItem reverse />
        <BlogItem />
      </div>
    </div>
  );
};
