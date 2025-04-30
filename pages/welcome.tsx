import Head from "next/head";

export default function Welcome() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>arenaysal - Bienvenida</title>
      </Head>
      <h1 className="brand-title-font text-3xl font-bold text-center mt-10">Bienvenido a <span className="brand-title">arenaysal</span></h1>
      <p className="text-center mt-4 text-lg">
        Gracias por tu reserva. A continuación te explicamos cómo llegar al apartamento.
      </p>

      <h2 className="brand-title-font text-2xl mt-10">Cómo llegar</h2>
      <p className="mt-4 text-lg">
        El apartamento está en calle Carril de la Fuente, 4A, 2ºE
        <br />
        Si llegas en coche, la mejor forma de acceder es desde el Paseo Marítimo, por la calle Huerto, encontrarás una plaza de carga/descarga frente al restaurante Mama que es el mejor sitio para descargar las maletas.
        <br />
        Al portal se accede por el callejón peatonal que hay junto al restaurante Mama (mirándolo, a tu derecha). Llegas al final y tienes la cancela a la izquierda, con los porteros electrónico donde llamar al 2ºE.
        <br />
        Al abrir, se abren las 2 puertas, la de la cancela y la del portal. Hay que subir a la segunda planta y el apartamento es la primera puerta junto a la escalera.
        <br />
        En la ventana de la cocina hay un cajetín para recoger las llaves.
        <br />
        Para aparcar el coche, en el Paseo Marítimo es gratis durante el año excepto en verano, cuando hay que pagar zona azul pero no es muy cara.
        Si no encuentras sitio, hay más aparcamiento cerca del río, los primeros de pago, los últimos gratuitos.
      </p>

      <h2 className="brand-title-font text-2xl mt-10">Wifi</h2>
      <p className="mt-4 text-lg">
        TODO
      </p>

      <h2 className="brand-title-font text-2xl mt-10">¿Necesitas algo?</h2>
      <p className="mt-4 text-lg">
        Whatsapp 626043500
      </p>
    </div>
  );
}