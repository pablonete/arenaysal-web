import Image from "next/image";
import Head from "next/head";
import { buildHref } from "../utils/image-url";

export default function Welcome() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>arenaysal - Checkout</title>
      </Head>
      <h1 className="brand-title-font text-3xl font-bold text-center mt-10">
        Gracias por alojarte en <span className="brand-title">arenaysal</span>, espero que tu estancia haya sido agradable.
      </h1>
      <p className="text-center mt-4 text-lg">
        Te explicamos cómo dejar el apartamento el día de tu salida.
      </p>

      <h2 className="brand-title-font text-2xl mt-10">Cuándo</h2>
      <p className="mt-4 text-lg">
        Tienes que salir del apartamento antes de las 11:00 de la mañana.
      </p>

      <h2 className="brand-title-font text-2xl mt-10">Cómo</h2>
      <p className="mt-4 text-lg">
        Asegúrate de que todo está en buen estado:
      </p>
      <p className="mt-4 text-lg">
        <ul>
          <li>Tira la basura, hay contenedores en el paseo marítimo.</li>
          <li>Déjalo todo limpio y la vajilla tal como la encontraste.</li>
          <li>No hagas las camas, tenemos que lavar las sábanas y toallas.</li>
          <li>Deja todas las ventanas cerradas.</li>
          <li>Deja las llaves en la mesa del salón.</li>
          <li>Avísanos cuando salgas.</li>
          <li>Estamos encantados de recibir cualquier sugerencia o comentario.</li>
        </ul>
      </p>
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
