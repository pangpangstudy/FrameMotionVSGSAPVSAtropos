import React from "react";

function About() {
  return (
    <div className="pt-20 bg-[#CDEA68] w-full rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="px-5 xl:px-12  text-name font-neueMontreal font-light text-[4vw] leading-[4vw] tracking-tight mb-14">
        Ochi is a strategic partner for fast-growwing tech businesses that need
        to raise funds, sell products, explain commplex ideas, and hire great
        people.
      </h1>
      <div className="grid grid-cols-12 border-t-[2px] px-5 xl:px-12  py-6 border-[#A4C55D]">
        <div className="md:col-span-4 lg:col-span-6">What you can expect: </div>
        <div className="md:col-span-4 lg:col-span-4 max-w-72">
          <div>
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-2 md:place-content-end">
          <div>
            <p className="mb-3">S:</p>
            <ul>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Behance</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex  gap-5 border-t-[2px] p-5 px-5 xl:px-12  border-[#A4C55D]">
        <div className="flex-1">
          <h1 className="text-6xl fon-bold">Our approach:</h1>
          <button className="flex items-center gap-10 uppercase px-9  py-4 mt-6 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="flex-1">
          <img
            className=" object-center object-contain bg-cover rounded-2xl h-auto w-full"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
