import img1 from "../assets/pic 1.jpg";
import img2 from "../assets/pic 2.jpg";
import img3 from "../assets/pic 3.jpg";
import img4 from "../assets/pic 4.jpg";
import { useState } from "react";
// import useMousePosition from "../utils/mouse";
function Section() {
  // const {x,y} = useMousePosition();
  // const size = 40;
  const art = [
    { title: "Mona Lisa", artist: "Leonardo da Vinci", num: 1, img: img1 },
    {
      title: "The Starry Night",
      artist: "Vincent van Gogh",
      num: 2,
      img: img2,
    },
    {
      title: "The Great Wave off Kanagawa",
      artist: "Hokusai",
      num: 3,
      img: img3,
    },
    {
      title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      num: 4,
      img: img4,
    },
  ];

  const [visible, setVisible] = useState(Array(art.length).fill(false));

  const handleVisibility = (index) => {
    const newStates = Array(visible.length).fill(false);
    newStates[index] = true;
    setVisible(newStates);
  };

  return (
    <div className='w-full flex items-center bg-base'>
      <div className='lg:flex lg:flex-row flex-col lg:h-[85vh] w-full mb-5'>
        {art.map((art, index) => (
          <section
            onClick={() => handleVisibility(index)}
            onDoubleClick={() => (window.location.href = "art")}
            key={index}
            className={`h-96 my-5 cursor-pointer relative lg:border-0 border-[1px] border-[#e5deda] shadow lg:shadow-none lg:my-0 lg:h-full flex flex-col justify-around basis-full lg:basis-1/4 ${
              index === 0 || index === 1 || index === 2
                ? "border-[#e5deda] lg:border-r-2"
                : ""
            } `}
          >
            <div className='ml-5'>
              <p className='star lg:text-5xl text-3xl uppercase text-black'>
                {art.title}
              </p>
              <p className='star text-base text-black'>{art.artist}</p>
            </div>
            <p className='text-red font-black text-9xl lg:text-[15rem] text-center star'>
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

              <p
                className={`ml-5 absolute star lg:text-5xl text-3xl uppercase left-0 top-0 mt-16 ${
                  index === 3 ? "text-black" : ""
                }`}
              >
                {art.title}

                <br />

                <span
                  className={`star text-base ${
                    index === 3 ? "text-black" : ""
                  }`}
                >
                  {art.artist}
                </span>
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Section;
