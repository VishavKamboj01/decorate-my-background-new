import image_1 from "../../images/image_1.jpg";
import image_2 from "../../images/image_2.jpg";
import image_3 from "../../images/image_3.jpg";
import image_4 from "../../images/image_4.jpg";
import image_5 from "../../images/image_5.jpg";
import image_6 from "../../images/image_6.jpg";
import image_7 from "../../images/image_7.jpg";
import image_8 from "../../images/image_8.jpg";
import image_9 from "../../images/image_9.jpg";
import image_10 from "../../images/image_10.jpg";
const randomImages = [
  {
    id: 1,
    title: "Beautiful SunSet",
    src: image_1,
  },
  {
    id: 2,
    title: "Lake Between Forest",
    src: image_2,
  },
  {
    id: 3,
    title: "Programming",
    src: image_3,
  },
  {
    id: 4,
    title: "Mercides",
    src: image_4,
  },
  {
    id: 5,
    title: "Cute Dogs",
    src: image_5,
  },
  {
    id: 6,
    title: "Anonymous Person",
    src: image_6,
  },
  {
    id: 7,
    title: "Snowy Mountains",
    src: image_7,
  },
  {
    id: 8,
    title: "City Buildings",
    src: image_8,
  },
  {
    id: 9,
    title: "Desert House",
    src: image_9,
  },
  {
    id: 10,
    title: "Glowing Bridge",
    src: image_10,
  },
];

export function getRandomImages() {
  return randomImages;
}
