import { motion,} from "framer-motion";
import cir from "../assets/surface.svg";

function Hero() {
 

  return (
    <main className='h-screen'>
      <div className='flex items-center flex-col pattern relative justify-center lg:h-[82vh] h-screen'>
        <img src={cir} className='h-44 anim left-0 top-0 absolute' alt='' />
        <img src={cir} className='h-52 anim right-0 bottom-0 absolute' alt='' />
        <motion.div
          id='intro'
          // initial={{ y: 100, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.8, delay: 1 }}
          className='lg:text-8xl uppercase leading-relaxed lg:leading-normal text-5xl text-center text-red star'
        >
          {/* L&apos; <br /> Art Du Savoir */}
          Donde la <br /> Imaginación Encuentra el Lienzo
        </motion.div>

        <p className='body lg:font-medium lg:text-2xl italic text-sub'>
          &apos;Where Imagination Finds the Canvas&apos;
        </p>
        {/* Where Imagination Finds the Canvas */}
      </div>
    </main>
  );
}

export default Hero;
