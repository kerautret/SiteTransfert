const images = [
  "images/image1.jpg",
  "images/image2.png",
  "images/image3.webp"
];

const randomIndex = Math.floor(Math.random() * images.length);
window.location.href = images[randomIndex];
