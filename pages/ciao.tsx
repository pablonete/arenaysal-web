import Image from "next/image";
import Head from "next/head";
import { buildHref } from "../utils/image-url";

export default function Ciao() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>arenaysal - Salida</title>
      </Head>
      <h1 className="brand-title-font text-3xl font-bold text-center mt-10">
        Checkout
      </h1>
      <p className="text-center mt-4 text-lg">
        Gracias por alojarte en <span className="brand-title">arenaysal</span>, espero que tu estancia haya sido agradable.
        A continuación te explicamos los pasos para dejar el apartamento.
      </p>

      <h2 className="brand-title-font text-2xl mt-10">Cuándo</h2>
      
      <ul className="mt-4 space-y-4">
        <li className="text-lg">
          • Hay que dejar el apartamento antes de las <strong>11:00</strong> de la mañana
        </li>
      </ul>

      <h2 className="brand-title-font text-2xl mt-10">Instrucciones de salida</h2>
      
      <ul className="mt-4 space-y-4">
        <li className="text-lg">
          • No dejes <strong>basura</strong> en el apartamento, hay contenedores en el paseo marítimo.
        </li>
        <li className="text-lg">
          • Déjalo todo <strong>ordenado</strong> para que puedan entrar a limpiar mejor.
        </li>
        <li className="text-lg">
          • Deja la vajilla limpia y recogida tal como la encontraste.
        </li>
        <li className="text-lg">
          • No hagas las <strong>camas</strong>, tenemos que lavar las sábanas y toallas.
        </li>
        <li className="text-lg">
          • Deja todas las <strong>ventanas</strong> cerradas.
        </li>
        <li className="text-lg">
          • Deja las <strong>llaves</strong> en la mesa del salón.
        </li>
        <li className="text-lg">
          • <strong>Avísanos</strong> cuando salgas.
        </li>
      </ul>

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
