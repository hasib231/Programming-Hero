
const products = [
  { name: "laptop", price: 3200, brand: "len", color: "silver" },
  { name: "phone", price: 7000, brand: "HTC", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sungalss", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const newProduct = { name: "webcam", price: 700, brand: "Lal" };

// copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);