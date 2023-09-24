import { useState } from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";
import { GiGreekSphinx } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Nav() {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Art", link: "/art" },
    { title: "Painting", link: "/" },
    { title: "Gallery", link: "/" },
  ];
  const [menu, setMenu] = useState(false);

  const variants = {
    initial: {
      scaleX: 0,
    },

    animate: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },

    exit: {
      scaleX: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },

    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <div className='top-0 sticky z-50 bg-base'>
      <nav>
        <section className='flex lg:h-20 h-16'>
          <div className='basis-1/5 flex items-center '>
            <Link to={"/"}>
              <GiGreekSphinx size={"1.5rem"} />
            </Link>
          </div>

          <div className='basis-3/5 name flex items-center justify-center text-xl'>
            <Link to={"/"} className='lg:text-lg text-sm'>ArtScape</Link>
          </div>

          <div className='basis-1/5 flex justify-end items-center'>
            <CgMenuRightAlt
              onClick={() => {
                setMenu(true);
              }}
              className='hover:cursor-pointer'
              size={"2rem"}
            />
          </div>
        </section>

        {/* Side Menu */}
        <AnimatePresence>
          {menu && (
            <motion.div
              animate='animate'
              exit='exit'
              initial='initial'
              variants={variants}
              className={`right-0 bg-red-500 fixed w-full origin-right h-screen flex top-0`}
            >
              <div className='lg:basis-2/6 basis-0 bg-transparent backdrop-blur-sm'></div>

              <div className='lg:basis-4/6 basis-full container mx-auto px-10 pattern bg-red'>
                <div className='flex justify-between items-center lg:h-20 h-16'>
                  <Link to={"/"} className='lg:text-lg name text-txt text-sm'>ArtScape</Link>

                  <CgClose
                    onClick={() => setMenu(false)}
                    className='hover:cursor-pointer text-txt'
                    size={"2rem"}
                  />
                </div>

                <div className='flex justify-center h-3/4 '>
                  <motion.div
                    initial='initial'
                    animate='open'
                    exit='initial'
                    variants={containerVars}
                    className='flex items-center justify-center flex-col '
                  >
                    {navLinks.map((link, index) => (
                      <div className='overflow-hidden' key={index}>
                        <MobileNavLink
                          key={index}
                          title={link.title}
                          link={link.link}
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>

                <div className='h-20 flex justify-center items-center'>
                  <a href=''>
                    <AiOutlineGithub className='text-txt' size={"1.5rem"} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default Nav;

const linkVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },

  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileNavLink = ({ title, link }) => {
  return (
    <motion.div
      variants={linkVariants}
      className='text-4xl text-txt star uppercase my-4'
    >
      <Link to ={link}>{title}</Link>
    </motion.div>
  );
};
