import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Page() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <>
      {/* 背景动画 */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10">
        <Spline scene="https://prod.spline.design/oSxVDduGPlsuUIvT/scene.splinecode" />
      </div>

      <div className="flex flex-col items-center justify-center h-screen text-zinc-900 text-center px-4">
        {!showLetter ? (
          <>
            <img
              src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
              alt="Bear"
              className="w-32 mb-6"
            />
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Una carta para Laia, ¿quieres abrirla?
            </h1>
            <div className="flex gap-4">
              <button
                onClick={() => setShowLetter(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={() => {}}
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-6 rounded-lg"
              >
                No
              </button>
            </div>
          </>
        ) : (
          <div
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-rose-200 p-6 max-w-2xl text-left overflow-y-auto max-h-[70vh]
                       opacity-0 scale-95 animate-fadeIn"
          >
            <h2 className="text-2xl font-bold text-rose-600 mb-4 text-center">
              A la persona más especial
            </h2>
            <p>Laia, gracias. Deseo ser la persona más importante en tu corazón.</p>
            <p>
              Hoy pedí demasiado y te hice llorar, lo siento. Escribo estas
              palabras como una forma de redimirme.
            </p>
            <p>
              Eres la chica más especial que he conocido. Tu manera de pensar,
              tus hábitos, tus gustos e incluso tu historia me resultan únicos.
              Por fuera pareces independiente, pero siento la ternura en tu
              interior, y eso despierta en mí el deseo de ser tu apoyo y darte
              seguridad.
            </p>
            <p>
              Tú buscas una vida sencilla, y en eso coincidimos. Yo, que he visto
              demasiadas sombras del mundo —el engaño, el interés egoísta—
              también anhelo llevar una vida simple y auténtica.
            </p>
            <p>
              Encontrarte me hizo crecer. En España pasé momentos difíciles: un
              país desconocido, el idioma, el trabajo. Fuiste tú quien me devolvió
              la fuerza. Sé que te expresas más con acciones que con palabras y
              que, ante la presión, a veces te proteges con la evasión. Que
              puedas enfadarte conmigo me hace sentir que estoy entrando en tu
              mundo y que te sientes segura a mi lado.
            </p>
            <p>
              Si nuestro destino continúa, cuidaré de esta relación con todo mi
              corazón. Si no, te deseo lo mejor, siempre. Perdóname, Laia. Te
              amo.
            </p>
            <p className="text-right mt-4">—— Tu pequeño caballito 🐎</p>
          </div>
        )}
      </div>
    </>
  );
}
