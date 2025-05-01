import Image from "next/image";
import Head from "next/head";
import { buildHref } from "../utils/image-url";

export default function Welcome() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>arenaysal - Bienvenida</title>
      </Head>
      <h1 className="brand-title-font text-3xl font-bold text-center mt-10">
        Bienvenido a <span className="brand-title">arenaysal</span>
      </h1>
      <p className="text-center mt-4 text-lg">
        Gracias por tu reserva. A continuación te explicamos cómo llegar al
        apartamento.
      </p>

      <h2 className="brand-title-font text-2xl mt-10">Cómo llegar</h2>
      <p className="mt-4 text-lg">
        El apartamento está en calle Carril de la Fuente, 4A, 2ºE
      </p>
      <p className="mt-4 text-lg">
        Si llegas en coche, la mejor forma de acceder es desde el Paseo
        Marítimo, por la calle Huerto, encontrarás una zona de carga/descarga
        que es el mejor sitio para descargar las maletas.
        <a
          className="mx-2 underline text-blue-500"
          href="https://maps.app.goo.gl/ts5JQ7dr7MZwkFny5"
        >
          <Image
            alt="Google Maps icon"
            src={buildHref("map-icon.svg")}
            width={24}
            height={24}
            className="inline-block mx-2"
          />
          Google Maps
        </a>
      </p>
      <p className="mt-4 text-lg">
        Al portal se accede por el callejón peatonal que hay entre el
        restaurante Mama y la zapatería Natural World. Al fondo tienes la
        cancela a la izquierda, con los porteros electrónicos donde llamar al
        2ºE.
      </p>
      <h2 className="brand-title-font text-2xl mt-10">Auto-checkin</h2>
      <p className="mt-4 text-lg">
        Cuando llames te abrimos online, y se abren las 2 puertas, la de la
        cancela y la del portal que hay a continuación. Hay que subir a la
        segunda planta y el apartamento es la primera puerta junto a la
        escalera.
      </p>
      <p className="mt-4 text-lg">
        En la ventana de la cocina hay un cajetín para recoger las llaves con el
        PIN que te hemos proporcionado.
      </p>
      <h2 className="brand-title-font text-2xl mt-10">Donde aparcar</h2>
      <p className="mt-4 text-lg">
        Para aparcar el coche, en el Paseo Marítimo es gratis durante el año
        excepto en verano, cuando hay que pagar zona azul pero no es muy cara.
        Si no encuentras sitio, hay más aparcamiento cerca del río, los primeros
        de pago, los últimos gratuitos.
      </p>

      <h2 className="brand-title-font text-2xl mt-10">Wifi</h2>
      <img
        src={buildHref("wifi-qr-74B0.png")}
        alt="WiFi QR Code"
        className="mt-2 max-w-xs"
      />

      <h2 className="brand-title-font text-2xl mt-10">¿Necesitas algo?</h2>

      <p className="mt-4 text-lg">
        Mi WhatsApp es el
        <Image
          alt="Whatsapp icon"
          src={buildHref("whatsapp.svg")}
          width={24}
          height={24}
          className="inline-block mx-2"
        />
        626043500
      </p>
      <p className="mt-4 text-lg">-Patricia</p>
    </div>
  );
}
