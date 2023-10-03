import Nav from "../components/nav";
import Hero from "./hero";
import Section from "./section";
import transition from "../utils/transition";

function Home() {
  return (
    <main className='bg-base'>
      <div className='w-full min-h-screen relative container mx-auto lg:px-20 px-5'>
        <Nav />
        <Hero />
        <Section />
      </div>
    </main>
  );
}

export default transition(Home);
