import Nav from "../components/nav"
import transition from "../utils/transition";

function Art(props) {
  return (
    <div className=' bg-base'>
      <div className='w-full min-h-screen relative container mx-auto lg:px-20 px-5'>
        <Nav />
        <p className='text-center text-5xl'>Art</p>
      </div>
    </div>
  );
}

export default transition(Art);