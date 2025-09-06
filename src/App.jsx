import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

// 重新用回项目里的小熊/爱心资源
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import Lovegif from "./assets/GifData/main_temp.gif";

export default function Page() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <>
      {/* 背景动画 */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10">
        <Spline scene="https://prod.spline.design/oSxVDduGPlsuUIvT/scene.splinecode" />
      </div>

      <div className="overflow-hidden flex flex-col items-center justify-center h-screen text-zinc-900 text-center px-4">
        {!showLetter ? (
          <>
            {/* 左上角跳动的爱心SVG（原风格） */}
            <img
              src={lovesvg}
              className="fixed animate-pulse top-10 left-6 md:left-15 md:w-40 w-28"
              alt="Love SVG"
            />
            {/* 中间小熊GIF（原风格） */}
            <img
              className="h-[230px] rounded-lg mb-4"
              src={Lovegif}
              alt="Love Animation"
            />

            {/* 标题改为西语 */}
            <h1 className="text-4xl md:text-6xl my-4 text-center">
              Una carta para Laia, ¿quieres abrirla?
            </h1>

            {/* Yes / No 按钮：No 不操作，Yes 展开信件 */}
            <div className="flex flex-wrap justify-center gap-2 items-center">
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
          // 展开后的信件卡片（含淡入动画）
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-rose-200 p-6 max-w-2xl text-left overflow-y-auto max-h-[70vh] opacity-0 scale-95 animate-fadeIn">
            <h2 className="text-2xl font-bold text-rose-600 mb-4 text-center">
              A la persona más especial
            </h2>
            <p>Laia, gracias. Deseo ser la persona más importante en tu corazón.</p>
            <p>Hoy pedí demasiado y te hice llorar, lo siento. Escribo estas palabras como una forma de redimirme.</p>
            <p>
              Eres la chica más especial que he conocido. Tu manera de pensar, tus hábitos, tus gustos e incluso tu
              historia me resultan únicos. Por fuera pareces independiente, pero siento la ternura en tu interior, y
              eso despierta en mí el deseo de ser tu apoyo y darte seguridad.
            </p>
            <p>
              Tú buscas una vida sencilla, y en eso coincidimos. Yo, que he visto demasiadas sombras del mundo —el
              engaño, el interés egoísta—, también anhelo llevar una vida simple y auténtica.
            </p>
            <p>
              Encontrarte me hizo crecer. En España pasé momentos difíciles: un país desconocido, el idioma, el trabajo.
              Fuiste tú quien me devolvió la fuerza. Sé que te expresas más con acciones que con palabras y que, ante la
              presión, a veces te proteges con la evasión. Que puedas enfadarte conmigo me hace sentir que estoy
              entrando en tu mundo y que te sientes segura a mi lado.
            </p>
            <p>
              Si nuestro destino continúa, cuidaré de esta relación con todo mi corazón. Si no, te deseo lo mejor,
              siempre. Perdóname, Laia. Te amo.
            </p>
            <p className="text-right mt-4">—— Tu pequeño caballito 🐎</p>
          </div>
        )}
      </div>
    </>
  );
}
