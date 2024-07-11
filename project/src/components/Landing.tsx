import { GoArrowUpRight } from "react-icons/go";
type Props = {};

function Landing({}: Props) {
  return (
    <div className="xl:px-12 w-full py-36 flex flex-col  xl:min-h-screen">
      <div className=" textstructure px-5  mb-40">
        {["We Create", "Eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="marker" key={index}>
              <div className="w-fit flex gap-x-4 items-end">
                {index === 1 && (
                  <div className="w-[9vw] h-[5.6vw] bg-blue-500 rounded-lg"></div>
                )}
                <h1 className="uppercase text-[8.5vw] leading-[.75] font-foundersGrotesk font-bold text-nowrap">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-5 border-t-[1px] border-gray-400 mt-auto  flex justify-between items-center py-2 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              className="text-md font-light tracking-tight leading-none font-neueMontreal"
              key={index}
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-2 border-black rounded-full uppercase  md:text-sm ">
            start the project
          </div>
          <div className="w-10 h-10 border-[3px] border-black rounded-full  flex justify-center items-center">
            <GoArrowUpRight className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
