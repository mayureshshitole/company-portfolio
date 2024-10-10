import React from "react";
import TextRevealByWord from "./ui/text-reveal";

const Cta = () => {
  return (
    <div className="w-full">
      <div className="z-10 flex items-center justify-center rounded-lg border bg-white dark:bg-black">
        <TextRevealByWord text="Your Vision, Our Support — Turning Innovational Ideas into Reality" />
      </div>
      {/* Your Vision, Our Code — Turning Ideas into Reality */}
    </div>
  );
};

export default Cta;
