class FLOTA {
  constructor(marca, vehiculo, tipo, servicio, precio) {
    this.marca = marca;
    this.vehiculo = vehiculo;
    this.tipo = tipo;
    this.servicio = servicio;
    this.precio = precio;
  }

  descripcion() {
    return (
      "\nFlota: " +
      "\n" +
      "\nmarca: " +
      this.marca +
      "\nvehiculo: " +
      this.vehiculo +
      "\ntipo: " +
      this.tipo +
      "\nservicio: " +
      this.servicio +
      "\nprecio: " +
      this.precio +
      "\n"
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

precio_con_iva(){
    return this.precio * 1.21
}

}

const flota1 = new FLOTA(
  "fiat",
  "fiorino",
  "miniflete",
  "entrega y retiro",
  100
);
const flota2 = new FLOTA("ford", "boxer", "flete", "entrega y retiro", 200);
const flota3 = new FLOTA(
  "mercedez",
  "fiorino",
  "camion",
  "entrega y retiro",
  300
);
let rta = "";

do {
  console.log(
    "La flota con la que contamos es la siguiente: \n" +
      flota1.descripcion() +
      flota2.descripcion() +
      flota3.descripcion()
  );

  alert(
    "Bienvenido a LGTransporte, contamos con tres tipos de fletes: miniflete; flete y camion"
  );

  let cantidad = Number(prompt("¿Cuantos fletes necesitas?"));

  if (cantidad >= 1) {
    let tipoFlete = String(
      prompt(
        "¿Que tipo de fletes necesitas? \nEscribe el que desees 'miniflete'; 'flete' o 'camion'"
      )
    );


    if ((tipoFlete == flota1.tipo)) {
        const factura = new Factura(flota1.precio * cantidad)

      console.log("Precio Flete: " + flota1.precio +
      "\nIVA: " + factura.detalle_iva () + 
      "\nTotal: " + factura.precio_con_iva ()
      );
      console.log(
        "¡Gracias por confiar en nosotros LGTransporte estara en camino en su fecha correspondiente!"
      );
      alert (
        "Precio Flete unitario: " + flota3.precio +
        "\nCantidad: " + cantidad +
        "\nIVA: " + factura.detalle_iva () + 
        "\nTotal: " + factura.precio_con_iva () +
        "\n¡Gracias por confiar en nosotros LGTransporte estara en camino en su fecha correspondiente!"
        )
    } else if (tipoFlete == flota2.tipo) {
        const factura = new Factura(flota2.precio * cantidad)

      console.log("Precio Flete: " + flota2.precio +
      "\nIVA: " + factura.detalle_iva () + 
      "\nTotal: " + factura.precio_con_iva ()
      );
      console.log(
        "¡Gracias por confiar en nosotros LGTransporte estara en camino en su fecha correspondiente!"
      );
      alert (
        "Precio Flete unitario: " + flota3.precio +
        "\nCantidad: " + cantidad +
        "\nIVA: " + factura.detalle_iva () + 
        "\nTotal: " + factura.precio_con_iva () +
        "\n¡Gracias por confiar en nosotros LGTransporte estara en camino en su fecha correspondiente!"
        )
    } else if (tipoFlete == flota3.tipo) {
        const factura = new Factura(flota3.precio * cantidad)

      console.log("Precio Flete unitario: " + flota3.precio +
      "\nCantidad: " + cantidad +
      "\nIVA: " + factura.detalle_iva () + 
      "\nTotal: " + factura.precio_con_iva ()
      );
      console.log(
        "¡Gracias por confiar en nosotros LGTransporte estara en camino en su fecha correspondiente!"
      );
      alert (
      "Precio Flete unitario: " + flota3.precio +
      "\nCantidad: " + cantidad +
      "\nIVA: " + factura.detalle_iva () + 
      "\nTotal: " + factura.precio_con_iva () +
      "\n¡Gracias por confiar en nosotros LGTransporte estara en camino en su fecha correspondiente!"
      )
    } else 
    alert ("no ha ingresado un tipo de flete correcto")
    console.log (
        "No ha ingresado un tipo de flete correcto"
    )
    
  } else if (cantidad < 0) {
    console.log("El numero ingresado no es valido.");
  }

  rta = prompt(
    'Desea seguir? Pulse cualquier letra para seguir o ingrese "ESC" para salir.'
  ).toUpperCase();
} while (rta != "ESC");
