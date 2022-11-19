let connection = new Mongo();
let database = connect("localhost:27017/ecommerce");
database.productos.insertMany([
  { title: "Lapiz", price: 100, thumbnail: "FotoRandom.jpg" },
  { title: "Maletin", price: 700, thumbnail: "FotoRandom.jpg" },
  { title: "Cuaderno", price: 300, thumbnail: "FotoRandom.jpg" },
  { title: "Impresora", price: 3000, thumbnail: "FotoRandom.jpg" },
  { title: "Laptop", price: 5000, thumbnail: "FotoRandom.jpg" },
  { title: "Escritorio", price: 4000, thumbnail: "FotoRandom.jpg" },
  { title: "Pluma", price: 1200, thumbnail: "FotoRandom.jpg" },
  { title: "Libro", price: 800, thumbnail: "FotoRandom.jpg" },
  { title: "Pizarra", price: 2000, thumbnail: "FotoRandom.jpg" },
  { title: "Pintura", price: 1000, thumbnail: "FotoRandom.jpg" },
]);

database.mensajes.insertMany([
  { user: "Juan", message: "Hola" },
  { user: "Jose", message: "Hola" },
  { user: "Javier", message: "Hola" },
  { user: "Julian", message: "Hola" },
  { user: "Jimena", message: "Hola" },
  { user: "Jacinto", message: "Hola" },
  { user: "Jorge", message: "Hola" },
  { user: "Julia", message: "Hola" },
  { user: "Juana", message: "Hola " },
  { user: "Julieta", message: "Hola" },
]);
