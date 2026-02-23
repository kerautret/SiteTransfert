const images = [
  "images/image1.jpeg",
  "images/image2.jpeg",
  "images/image3.jpeg"
];
const randomIndex = Math.floor(Math.random() * images.length);
window.location.href = images[randomIndex];
