import Nav from "../components/nav";
import transition from "../utils/transition";
import { useAtom } from "jotai";
import { artwork } from "../utils/store";
function Art() {

  const [artpiece, setArtpiece] = useAtom(artwork);
  return (
    <div className=' bg-base'>
      <div className='w-full min-h-screen relative container mx-auto lg:px-20 px-5'>
        <Nav />
        <main className='flex lg:flex-row flex-col h-[75vh] mt-20'>
          <div className='flex flex-col justify-between lg:basis-[40%] basis-full p-5'>
            <p className='star lg:text-5xl text-3xl uppercase text-black'>
              {artpiece.title}
            </p>

            <p className="text-red font-black text-9xl lg:text-[15rem] text-center star">
              {artpiece.num}
            </p>
          </div>
          <div className='bg-blue-400 lg:basis-[60%] basis-full'>
            <img src={artpiece.img} className='h-2/3 w-full object-cover object-top' alt='' />
          </div>
        </main>
      </div>
    </div>
  );
}

export default transition(Art);
