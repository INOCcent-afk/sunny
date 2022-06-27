import React from "react";
import { GroupIcon } from "../icons/GroupIcon";

export const Points = () => {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-md">
      <div className="text-darkFont">
        <GroupIcon />
      </div>
      <h4 className="text-darkFont">Consultancy</h4>
      <p className="text-gray">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </p>
    </div>
  );
};
