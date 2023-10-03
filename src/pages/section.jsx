import { Link } from "react-router-dom";
import img1 from "../assets/pic 1.jpg";
import img2 from "../assets/pic 2.jpg";
import img3 from "../assets/pic 3.jpg";
import img4 from "../assets/pic 4.jpg";
import { useState } from "react";
import { useAtom } from "jotai";
import { artwork } from "../utils/store";
// import useMousePosition from "../utils/mouse";
function Section() {
  // const {x,y} = useMousePosition();
  // const size = 40;
  const [artpiece, setArtpiece] = useAtom(artwork);

  const art = [
    {
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      num: 1,
      img: img1,
      desc: "The Mona Lisa bears a strong resemblance to many Renaissance depictions of the Virgin Mary, who was at that time seen as an ideal for womanhood.[38] The woman sits markedly upright in a 'pozzetto' armchair with her arms folded, a sign of her reserved posture. Her gaze is fixed on the observer. The woman appears alive to an unusual extent, which Leonardo achieved by his method of not drawing outlines (sfumato). The soft blending creates an ambiguous mood 'mainly' in two features: the corners of the mouth, and the corners of the eyes",
    },
    {
      title: "The Starry Night",
      artist: "Vincent van Gogh",
      num: 2,
      img: img2,
      desc: "The Starry Night (Dutch: De sterrennacht) is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lillie P. Bliss Bequest. Widely regarded as Van Gogh's magnum opus, The Starry Night is one of the most recognizable paintings in Western art.",
    },
    {
      title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      num: 3,
      img: img3,
      desc: "The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing 'exotic dress', an 'oriental turban', and what appears to be a very large pearl as an earring. The subject of the painting is unknown, with it either being possible that she was a real model, or that Vermeer created a more generalised and mysterious woman, perhaps representing a Sibyl or biblical figure.[4] There has been speculation that she is the artist's eldest daughter, Maria, though this has been dismissed as an anachronism by some art historians.",
    },
    {
      title: "The Great Wave off Kanagawa",
      artist: "Hokusai",
      num: 4,
      img: img4,
      desc: "The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. Under the Wave off Kanagawa')[a] is a woodblock print by Japanese ukiyo-e artist Hokusai, created in late 1831 during the Edo period of Japanese history. The print depicts three boats moving through a storm-tossed sea, with a large, cresting wave forming a spiral in the centre and Mount Fuji visible in the background. The print is Hokusai's best-known work and the first in his series Thirty-six Views of Mount Fuji, in which the use of Prussian blue revolutionized Japanese prints. The composition of The Great Wave is a synthesis of traditional Japanese prints and use of graphical perspective developed in Europe, and earned him immediate success in Japan and later in Europe, where Hokusai's art inspired works by the Impressionists.",
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
      <div className='lg:flex lg:flex-row flex-col lg:h-[85vh] w-full mb-5 lg:mb-10'>
        {art.map((art, index) => (
          <Link
            to={"/art"}
            onClick={() => {
              handleVisibility(index);
              setArtpiece(art);
            }}
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Section;
