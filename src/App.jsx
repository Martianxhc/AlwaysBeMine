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
<div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-rose-200 p-6 max-w-2xl text-left overflow-y-auto max-h-[70vh] opacity-0 scale-95 animate-fadeIn leading-relaxed">
  <h2 className="text-2xl font-bold text-rose-600 mb-6 text-center">Para Laia</h2>

  <p className="mb-4">
    Laia, gracias. Cuánto deseo ser la persona que más importa en tu corazón.
    Hoy te pedí algo exagerado y volviste a llorar por mi culpa. Me duele y me
    siento culpable. Escribo estas palabras como una forma de redimirme.
  </p>

  <p className="mb-4">
    Eres la chica más especial que he conocido. Tu manera de pensar, tus hábitos
    de vida, tus intereses e incluso tu historia me resultan únicos y
    fascinantes. Por fuera pareces muy independiente, pero siento la ternura de
    tu interior, y eso despierta en mí el deseo de ser tu apoyo y darte
    seguridad.
  </p>

  <p className="mb-4">
    Tú buscas una vida sencilla, y en eso coincidimos. Yo, que desde hace
    tiempo he visto demasiadas sombras de la humanidad —el engaño, el interés
    egoísta, la lucha constante— también anhelo llevar una vida y un proyecto
    simples y auténticos.
  </p>

  <p className="mb-4">
    Encontrarte fue una suerte, y también un espejo en el que vi mis carencias:
    inseguridad, celos, deseos y ambiciones que a veces me hicieron perder el
    rumbo. Pero gracias a ti sigo aprendiendo y creciendo. Tu amor por tu patria
    me hizo replantear mi interior y aprender a mirar el mundo con una visión
    más amplia.
  </p>

  <p className="mb-4">
    Durante estos meses en España pasé por momentos difíciles: un país
    desconocido, el idioma, los fracasos en el trabajo. Fuiste tú quien me
    devolvió la confianza y me animó a enfrentar la vida con valentía.
  </p>

  <p className="mb-4">
    También sé que en el amor no hablas mucho, sino que prefieres expresarte con
    acciones. Y cuando llega la presión, sueles huir para protegerte. Y sé que
    conmigo te permites enfadarte, mostrar tu verdadero yo. Eso me hace sentir
    que poco a poco he entrado en tu mundo. Que puedas enojarte conmigo
    significa que te sientes segura, y eso, en realidad, me alegra. No quiero
    exigirte nada; solo deseo ser mejor persona, alguien digno de tu confianza,
    capaz de darte tranquilidad y felicidad.
  </p>

  <p className="mb-4">
    Tal vez mi cariño y mi dependencia hayan sido una carga para ti, pero
    créeme: tu sinceridad y tu pasión derritieron el hielo de mi corazón.
  </p>

  <p className="mb-4 font-medium text-rose-700">
    Si nuestro destino continúa, me esforzaré por cuidar y hacer crecer nuestra
    relación. Y si el destino llega a su fin, de todo corazón deseo que estés
    bien. Pase lo que pase, siempre ocuparás un lugar muy especial en mi
    corazón.
  </p>

  <p className="mt-6">Perdóname, Laia.</p>
  <p>Te amo, Laia.</p>

  <p className="text-right mt-6 font-semibold">— Xiaomache 🐎</p>
</div>
        )}
      </div>
    </>
  );
}
