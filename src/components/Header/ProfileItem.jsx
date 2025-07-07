import React from "react";

const ProfileItem = ({yazi, icon}) => {
  return (
    <span className="p-2 cursor-pointer hover:text-[#fdb2bb] transition-all flex items-center justify-start gap-1.5 text-sm">
      <img src={`/img/${icon}.png`} className="size-4" alt="" />
      {yazi}
    </span>
  );
};

export default ProfileItem;
