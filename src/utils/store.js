import { atom } from "jotai";
import img1 from "../assets/pic 1.jpg";
import img2 from "../assets/pic 2.jpg";
import img3 from "../assets/pic 3.jpg";
import img4 from "../assets/pic 4.jpg";
import img5 from "../assets/pic 5.jpg";
import img6 from "../assets/pic 6.jpg";
import img7 from "../assets/pic 7.jpg";
import img8 from "../assets/pic 8.jpg";
import img9 from "../assets/pic 9.jpg";
import img10 from "../assets/pic 10.jpg";
import img11 from "../assets/pic 11.jpg";
import img12 from "../assets/pic 12.jpg";

export const arts = [
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    num: 1,
    img: img1,
    desc: "The Mona Lisa bears a strong resemblance to many Renaissance depictions of the Virgin Mary, who was at that time seen as an ideal for womanhood.The woman sits markedly upright in a 'pozzetto' armchair with her arms folded, a sign of her reserved posture. Her gaze is fixed on the observer. The woman appears alive to an unusual extent, which Leonardo achieved by his method of not drawing outlines (sfumato). The soft blending creates an ambiguous mood 'mainly' in two features: the corners of the mouth, and the corners of the eyes.",
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

  {
    title: "American Gothic",
    artist: "Grant Wood",
    num: 5,
    img: img5,
    desc: "American Gothic is a 1930 painting by Grant Wood in the collection of the Art Institute of Chicago.Wood was inspired to paint what is now known as the American Gothic House in Eldon, Iowa, along with 'the kind of people he fancied should live in that house'. It depicts a farmer standing beside his daughter; often mistakenly assumed to be his wife. The painting's name is a word play on the house's architectural style, Carpenter Gothic. The figures were modeled by Wood's sister Nan Wood Graham and their dentist Dr. Byron McKeeby. The woman is dressed in a colonial print apron evoking 20th-century rural Americana while the man is adorned in overalls covered by a suit jacket and carries a pitchfork.",
  },

  {
    title: "Whistler's Mother",
    artist: "James McNeill Whistler",
    num: 6,
    img: img6,
    desc: "Anna McNeill Whistler posed for the painting while living in London with her son at 96 Cheyne Walk, Chelsea. Several unverifiable stories relate to the painting of the work; one is that Anna Whistler acted as a replacement for another model who could not make the appointment. Whistler originally envisioned painting the model standing up. However, his mother was too uncomfortable to pose standing for an extended period. The work was shown at the 104th Exhibition of the Royal Academy of Art in London (1872), after coming within a hair's breadth of rejection by the Academy.",
  },

  {
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    num: 7,
    img: img7,
    desc: "The Last Supper is a mural painting by the Italian High Renaissance artist Leonardo da Vinci, dated to 1495 - 1498. The painting represents the scene of the Last Supper of Jesus with the Twelve Apostles, as it is told in the Gospel of John - specifically the moment after Jesus announces that one of his apostles will betray him. Its handling of space, mastery of perspective, treatment of motion and complex display of human emotion has made it one of the Western world's most recognizable paintings and among Leonardo's most celebrated works. Some commentators consider it pivotal in inaugurating the transition into what is now termed the High Renaissance. The work was commissioned as part of a plan of renovations to the church and its convent buildings by Leonardo's patron Ludovico Sforza, Duke of Milan.",
  },

  {
    title: "Impression, Sunrise",
    artist: "Claude Monet",
    num: 8,
    img: img8,
    desc: "Impression, Sunrise is an 1872 painting by Claude Monet first shown at what would become known as the 'Exhibition of the Impressionists' in Paris in April, 1874. The painting is credited with inspiring the name of the Impressionist movement. Impression, Sunrise depicts the port of Le Havre, Monet's hometown. It is now displayed at the Musée Marmottan Monet in Paris.",
  },

  {
    title: "Flaming June",
    artist: "Frederic Leighton",
    num: 9,
    img: img9,
    desc: "Flaming June is a painting by Sir Frederic Leighton, produced in 1895. Painted with oil paints on a 47-by-47-inch square canvas, it is widely considered to be Leighton's best-known work in the 21st century, much reproduced in posters and the like. It shows a sensuous version of his classicist Academic style. It is thought that the woman portrayed alludes to the figures of sleeping nymphs and naiads the Greeks often sculpted.",
  },

  {
    title: "Wanderer above the Sea of Fog",
    artist: "Caspar David Friedrich",
    num: 10,
    img: img10,
    desc: "Wanderer above the Sea of Fog is a painting by German Romanticist artist Caspar David Friedrich made in 1818. It depicts a man standing upon a rocky precipice with his back to the viewer; he is gazing out on a landscape covered in a thick sea of fog through which other ridges, trees, and mountains pierce, which stretches out into the distance indefinitely. It has been considered one of the masterpieces of the Romantic movement and one of its most representative works. The painting has been widely interpreted as an emblem of self-reflection or contemplation of life's path, and the landscape is widely considered to evoke the sublime. Friedrich was a common user of Rückenfigur (German: Rear-facing figure) in his paintings; Wanderer above the Sea of Fog is perhaps the most famous Rückenfigur in art due to the subject's prominence. The painting has also been interpreted as an expression of Friedrich's German liberal and nationalist feeling.",
  },

  {
    title: "A Sunday Afternoon on the Island of La Grande Jatte",
    artist: "Georges Seurat",
    num: 11,
    img: img11,
    desc: "Georges Seurat painted A Sunday Afternoon between May 1884 and March 1885, and from October 1885 to May 1886, focusing meticulously on the landscape of the park and concentrating on issues of colour, light, and form. The painting is approximately 2 by 3 metres in size. Seurat contrasted miniature dots or small brushstrokes of colors that when unified optically in the human eye were perceived as a single shade or hue. He believed that this form of painting, called Divisionism at the time (a term he preferred) but now known as Pointillism, would make the colors more brilliant and powerful than standard brushstrokes. The use of dots of almost uniform size came in the second year of his work on the painting, 1885-86. To make the experience of the painting even more vivid, he surrounded it with a frame of painted dots, which in turn he enclosed with a pure white, wooden frame, which is how the painting is exhibited today at the Art Institute of Chicago.",
  },

  {
    title: "Nighthawks",
    artist: "Edward Hopper",
    num: 12,
    img: img12,
    desc: "Nighthawks is a 1942 oil-on-canvas painting by the American artist Edward Hopper that portrays four people in a downtown diner late at night as viewed through the diner's large glass window. The light coming from the diner illuminates a darkened and deserted urban streetscape. It has been described as Hopper's best-known work and is one of the most recognizable paintings in American art. Within months of its completion, it was sold to the Art Institute of Chicago for $3,000.",
  },
];

export const artwork = atom({
  title: "Mona Lisa",
  artist: "Leonardo da Vinci",
  num: 1,
  img: img1,
  desc: "The Mona Lisa bears a strong resemblance to many Renaissance depictions of the Virgin Mary, who was at that time seen as an ideal for womanhood. The woman sits markedly upright in a 'pozzetto' armchair with her arms folded, a sign of her reserved posture. Her gaze is fixed on the observer. The woman appears alive to an unusual extent, which Leonardo achieved by his method of not drawing outlines (sfumato). The soft blending creates an ambiguous mood 'mainly' in two features: the corners of the mouth, and the corners of the eyes.",
});
