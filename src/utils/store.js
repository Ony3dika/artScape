import { atom } from "jotai";
import img1 from "../assets/pic 1.jpg";
import img2 from "../assets/pic 2.jpg";
import img3 from "../assets/pic 3.jpg";
import img4 from "../assets/pic 4.jpg";

export const artwork = atom({
  title: "Mona Lisa",
  artist: "Leonardo da Vinci",
  num: 1,
  img: img1,
  desc: "The Mona Lisa bears a strong resemblance to many Renaissance depictions of the Virgin Mary, who was at that time seen as an ideal for womanhood.[38] The woman sits markedly upright in a 'pozzetto' armchair with her arms folded, a sign of her reserved posture. Her gaze is fixed on the observer. The woman appears alive to an unusual extent, which Leonardo achieved by his method of not drawing outlines (sfumato). The soft blending creates an ambiguous mood 'mainly' in two features: the corners of the mouth, and the corners of the eyes",
});