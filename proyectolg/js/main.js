class PRODUCTOS {
  constructor(id, marca, tipo, modelo, precio, stock) {
    this.id = id;
    this.marca = marca;
    this.tipo = tipo;
    this.modelo = modelo;
    this.precio = precio;
    this.stock = stock;
  }

  descripcion() {
    return (
      "\nProductos: " +
      "\n" +
      this.id +
      "\nmarca: " +
      this.marca +
      "\ntipo: " +
      this.tipo +
      "\nmodelo: " +
      this.modelo +
      "\nprecio: " +
      this.precio +
      "\nstock: " +
      this.stock +
      "\n"
    );
  }

  descripcionh() {
    return (
      "Cod " +
      this.id +
      " " +
      this.marca +
      "-" +
      this.modelo +
      "    Precio: " +
      this.precio +
      "\nstock: " +
      this.stock
    );
  }
}

class Factura {
  constructor(precio) {
    this.precio = precio;
  }

  detalle_iva() {
    return this.precio * 0.21;
  }

  precio_con_iva() {
    return this.precio * 1.21;
  }
}

const producto1 = new PRODUCTOS(
  "1",
  "Apple",
  "Celular",
  "Iphone 14 pro max",
  1200000,
  4
);
const producto2 = new PRODUCTOS(
  "2",
  "Apple",
  "Celular",
  "Iphone 13 pro max ",
  500000,
  8
);
const producto3 = new PRODUCTOS(
  "3",
  "Apple",
  "Celular",
  "Iphone 12 red",
  650000,
  10
);
const producto4 = new PRODUCTOS(
  "4",
  "Samsung",
  "Celular",
  "Galaxy s23 ultra",
  1200000,
  8
);
const producto5 = new PRODUCTOS(
  "5",
  "Samsung",
  "Celular",
  "Galaxy s22 ultra ",
  500000,
  10
);
const producto6 = new PRODUCTOS(
  "6",
  "Samsung",
  "Celular",
  "Galaxy s21 fe",
  650000,
  15
);
const producto7 = new PRODUCTOS(
  "7",
  "MSI",
  "Placa de video",
  "MSI AMD Radeon RX 580",
  1200000,
  3
);
const producto8 = new PRODUCTOS(
  "8",
  "Nvidia",
  "Placa de video",
  "GEFORCE RTX 3090 ",
  500000,
  5
);
let rta = "";

let prodArray = [
  { key: 1, producto1 },
  { key: 2, producto2 },
  { key: 3, producto3 },
  { key: 4, producto4 },
  { key: 5, producto5 },
  { key: 6, producto6 },
  { key: 7, producto7 },
  { key: 8, producto8 },
];

for (i = 0; i < prodArray.length; i++) {
  console.log(prodArray[i]);
}

do {
  alert(
    "Bienvenido a COMMERCE Tech \n¿Que producto desear seleccionar? \n" +
      producto1.descripcionh() +
      "\n" +
      producto2.descripcionh() +
      "\n" +
      producto3.descripcionh() +
      "\n" +
      producto4.descripcionh() +
      "\n" +
      producto5.descripcionh() +
      "\n" +
      producto6.descripcionh() +
      "\n" +
      producto7.descripcionh() +
      "\n" +
      producto8.descripcionh()
  );

  let codigoArt = Number(
    prompt("Coloque el Codigo de producto que desea comprar")
  );

  if (codigoArt < prodArray.length) {
    let produ = prodArray.find((elemento) => elemento.key == codigoArt);
    console.log(produ);
    //    alert(prodArray.toString());
  }
  let aux;
  if (codigoArt == producto1.id && producto1.stock > 0) {
    let cantidad = Number(
      prompt(
        "Ha seleccionado " +
          producto1.descripcionh() +
          "\n" +
          "Indique la cantidad deseada: "
      )
    );
    aux = cantidad;
  } else {
    alert(
      "Ha ocurrido un error con el producto selecionado el cual no poseia stock o no existe"
    );
  }
  if (producto1.stock > aux) {
    let precioCantidad = aux * producto1.precio;
    let precioFinal = precioCantidad + precioCantidad * 0.21;
    alert(producto1.descripcion() + "\nPrecio Total: $ " + precioFinal);
  } else {
    alert("No hay stock para este producto segun la cantidad indicada");
  }

  // alert(producto.descripcion());
  let aux2 = prompt("Escriba SALIR para finalizar");
} while (rta != "ESC" && aux2 == "SALIR");
