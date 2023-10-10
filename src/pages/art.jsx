import Nav from "../components/nav";
import transition from "../utils/transition";
import { useAtom } from "jotai";
import { artwork } from "../utils/store";
import { Link } from "react-router-dom";
function Art() {
  const [artpiece, setArtpiece] = useAtom(artwork);
  return (
    <div className=' bg-base'>
      <div className='w-full min-h-screen relative container mx-auto lg:px-20 px-5'>
        <Nav />
        <main className='flex lg:flex-row flex-col h-fit mt-20'>
          <section className='flex flex-col justify-between lg:basis-[35%] h-96 lg:h-[75vh] basis-full p-5'>
            <div>
              <p className='star lg:text-start text-center lg:text-5xl text-3xl uppercase text-black'>
                {artpiece.title}
              </p>

              <p className='mt-1 lg:text-start text-center star text-lg'>
                By {artpiece.artist}
              </p>
            </div>

            <p className='text-red font-black text-9xl lg:text-[12rem] text-center star'>
              {artpiece.num}
            </p>
          </section>

          <section className='lg:basis-[60%] lg:border-x-[1.5px] border-[#e5deda] basis-full mb-5'>
            <img
              src={artpiece.img}
              className={` ${
                artpiece.num === 1 ||
                artpiece.num === 3 ||
                artpiece.num === 5 ||
                artpiece.num === 10
                  ? "h-96 w-full object-contain"
                  : "lg:h-96 w-full object-contain"
              }`}
              alt={artpiece.title}
            />

            <div className='lg:flex items-center'>
              <p className='star lg:mt-0 mt-5 lg:rotate-[270deg] text-center text-xl uppercase text-black'>
                Description
              </p>
              <p className='lg:mt-5 body leading-relaxed'>{artpiece.desc}</p>
            </div>
          </section>

          <section className='flex lg:flex-col lg:h-[75vh] mb-5 lg:mb-0 lg:basis-[5%] justify-between items-center body font-black'>
            <button
              onClick={() => {
                console.log(artpiece);
              }}
            >
              PREV
            </button>
            <button>NEXT</button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default transition(Art);
