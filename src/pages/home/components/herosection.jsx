import React from "react";

function HeroSection() {
  return (
    <section class="py-24 bg-red-50">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <p className="text-gray-400 font-semibold">
            THE LIKEMIND EDITORS
          </p>
          <h1 class="max-w-2xl mb-4 text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl ">
            <span className="block">Featured Books of the</span>
            <span className="font-extrabold">Library</span>
          </h1>
          <p
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-black  hover:bg-slate-700 focus:ring-4 focus:ring-gray-100"
          >
            See More
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1-12.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
