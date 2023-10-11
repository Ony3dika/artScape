function Hero() {
  return (
    <main className='h-screen'>
      <div className='flex items-center flex-col pattern justify-center lg:h-[82vh] h-screen'>
        <p className='lg:text-8xl uppercase leading-relaxed lg:leading-normal text-5xl text-center text-red star'>
          {/* L&apos; <br /> Art Du Savoir */}
          Donde la <br /> Imaginación Encuentra el Lienzo
        </p>

        <p className="body lg:font-medium lg:text-2xl italic text-sub">&apos;Where Imagination Finds the Canvas&apos;</p>
        {/* Where Imagination Finds the Canvas */}
      </div>
    </main>
  );
}

export default Hero;
