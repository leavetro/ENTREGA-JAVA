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

let carrito = new Array(10);

prodArray.add[0];
for (i = 0; i < carrito.length; i++) {
  cargoProducto().carrito.add[i];

  try {
    throw new Error("Esta superando el limite permito en el carrito");
  } catch (err) {
    console.error(err.message);
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

  if (codigoArt == producto1.id) {
    alert(producto.descripcion());
  }

  // alert(
  //     "Los productos con los que contamos son los siguientes: \n" + producto1.descripcion() + "\n" + producto2.descripcion() + "\n" + producto3.descripcion() + "\n" + producto4.descripcion() + "\n" + producto5.descripcion() + "\n" + producto6.descripcion() + "\n" + producto7.descripcion() + "\n" + producto8.descripcion() )
  //     let cant1 = Number(prompt("¿Cuantos " + producto1.modelo + " desea comprar?"))
  //     let cant2 = Number(prompt("¿Cuantos " + producto2.modelo + " desea comprar?"))
  //     let cant3 = Number(prompt("¿Cuantos " + producto3.modelo + " desea comprar?"))
  //     let cant4 = Number(prompt("¿Cuantos " + producto4.modelo + " desea comprar?"))
  //     let cant5 = Number(prompt("¿Cuantos " + producto5.modelo + " desea comprar?"))
  //     let cant6 = Number(prompt("¿Cuantos " + producto6.modelo + " desea comprar?"))
  //     let cant7 = Number(prompt("¿Cuantos " + producto7.modelo + " desea comprar?"))
  //     let cant8 = Number(prompt("¿Cuantos " + producto8.modelo + " desea comprar?"))

  cancela = cancelar(cant1, cant2, cant3, cant4, cant5, cant6, cant7, cant8);

  if (
    cancela == true ||
    cant1 == 0 ||
    cant3 == 0 ||
    cant4 == 0 ||
    cant5 == 0 ||
    cant6 == 0 ||
    cant7 == 0 ||
    cant8 == 0
  ) {
    alert("Usted ha cancelado el ingreso de datos");
    break;
  }

  if (cant1 <= producto1.stock && cant1 >= 1) {
    alert(
      "¡Gracias por su compra! El/Los " +
        cant1 +
        " producto-s " +
        producto1.modelo +
        " se enviaran los mas pronto a su domicilio!"
    );
    producto1.stock = producto1.stock - cant1;
  } else if (cant1 < 0) {
    alert("El numero ingresado no es valido.");
  } else {
    alert(
      "La cantidad de: " +
        cant1 +
        " excede a nuestro stock de: " +
        producto1.stock
    );
  }

  if (cant2 <= producto2.stock && cant2 >= 1) {
    alert(
      "¡Gracias por su compra! El/Los " +
        cant2 +
        " producto-s " +
        producto2.modelo +
        " se enviaran los mas pronto a su domicilio!"
    );

    producto2.stock = producto2.stock - cant2;
  } else if (cant2 < 0) {
    alert("El numero ingresado no es valido.");
  } else {
    alert(
      "La cantidad de: " +
        cant2 +
        " excede a nuestro stock de: " +
        producto2.stock
    );
  }

  if (cant1 > 0 || cant2 > 0) {
    let factura = new Factura(
      producto1.precio * cant1 + producto2.precio * cant2
    );

    alert(
      "El precio del producto es de: $" +
        factura.precio +
        "\n  Artiulo encargado: " +
        producto1.marca +
        " Cant: " +
        cant1 +
        " Precio unitario: " +
        producto1.precio +
        "\n  Articulo encargado: " +
        producto2.marca +
        " Cant: " +
        cant2 +
        " Precio unitario: " +
        producto2.precio +
        "\nIVA: $" +
        factura.detalle_iva() +
        "\nPrecio Final: $" +
        factura.precio_con_iva()
    );
  }

  rta = prompt(
    'Desea seguir comprando? Pulse cualquier letra para seguir o ingrese "ESC" para salir.'
  );

  cancela = cancelar(rta, " ");
  if (cancela == true) {
    alert("Usted ha cancelado el ingreso de datos");
    break;
  } else {
    rta = rta.toUpperCase();
  }
} while (rta != "ESC" && producto1.stock > 0);

if (producto1.stock == 0) {
  alert("Vendimos todo!");
} else {
  alert(
    "Aún quedan " +
      Number(producto1.stock + producto2.stock) +
      " remeras para vender."
  );
}
