import { Link } from "react-router-dom";
import { art } from "../utils/store";
import { useState } from "react";
import { useAtom } from "jotai";
import { artwork } from "../utils/store";
import { SiPluralsight } from "react-icons/si";

function Section() {
  const [artpiece, setArtpiece] = useAtom(artwork);
  const [visible, setVisible] = useState(Array(art.length).fill(false));
  const handleVisibility = (index) => {
    const newStates = Array(visible.length).fill(false);
    newStates[index] = true;
    setVisible(newStates);
  };

  return (
    <div className='w-full flex items-center bg-base'>
      <div className='md:grid md:grid-cols-2 lg:grid-cols-4 h-fit w-full mb-5 lg:gap-1 lg:mb-10'>
        {art.map((art, index) => (
          <div
            onClick={() => {
              handleVisibility(index);
              setArtpiece(art);
            }}
            key={index}
            className='h-96 my-5 cursor-pointer relative rounded-sm border-[1px] lg:border-[0.5px] border-[#e5deda] lg:my-0 lg:h-[30rem] flex flex-col justify-around basis-full lg:basis-1/4'
          >
            <div className='ml-5'>
              <p className='star lg:text-4xl text-3xl uppercase text-black'>
                {art.title}
              </p>
              <p className='star text-base text-black'>{art.artist}</p>
            </div>
            <p className='text-red font-black text-9xl lg:text-[10rem] text-center star'>
              {art.num}
            </p>

            <div
              className={`w-full mask h-full absolute ${
                visible[index] ? "mask-show" : "mask-hide"
              }`}
            >
              <img
                src={art.img}
                className='h-full object-cover lg:object-center object-top w-full'
                alt=''
              />

              <div
                className={`ml-5 absolute name lg:text-4xl text-3xl uppercase left-0 top-0 mt-16 ${
                  index === 3 ? "text-sub" : ""
                }`}
              >
                <p>{art.title}</p>

                <p
                  className={`name text-base my-3 ${
                    index === 3 ? "text-sub" : ""
                  }`}
                >
                  {art.artist}
                </p>

                {visible[index] ? (
                  <Link
                    to={"/art"}
                    className='flex bg-base border-[1px] border-sub/70 text-base text-sub rounded-full w-fit px-4 py-2'
                  >
                    <p>View</p>

                    <SiPluralsight className='ml-3' size={"1.3rem"} />
                  </Link>
                ) : (
                  " "
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
