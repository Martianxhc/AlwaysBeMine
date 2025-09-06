import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

// 方式A：Vite 推荐
const waxSeal = new URL("./assets/wax-seal-gold.png", import.meta.url).href;
console.log("waxSeal url →", waxSeal);
<img src={waxSeal} alt="Wax Seal" className="w-24 h-24" />

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
<div className="bg-gradient-to-b from-pink-50 to-white backdrop-blur-md rounded-3xl shadow-xl border border-rose-200 p-8 max-w-3xl text-left overflow-y-auto max-h-[80vh] animate-fadeIn leading-relaxed">
    {/* 西语标题 */}
    <h2 className="text-2xl font-bold text-rose-600 mb-4 text-center">Para Laia 💌</h2>

    <p>Laia, gracias. Cuánto deseo ser la persona que más importa en tu corazón.</p>
    <p>Hoy pedí demasiado y te hice llorar; me duele y me siento culpable. Escribo estas palabras como una forma de redimirme.</p>
    <p>Eres la chica más especial que he conocido. Tu manera de pensar, tus hábitos de vida, tus intereses e incluso tu historia me resultan únicos y fascinantes. Por fuera pareces muy independiente, pero siento la ternura de tu interior, y eso despierta en mí el deseo de ser tu apoyo y darte seguridad.</p>
    <p>Tú buscas una vida sencilla, y en eso coincidimos. Yo, que desde hace tiempo he visto demasiadas sombras de la humanidad —el engaño, el interés egoísta, la lucha constante— también anhelo llevar una vida y un proyecto simples y auténticos.</p>
    <p>Encontrarte fue una suerte, y también un espejo en el que vi mis carencias: inseguridad, celos, deseos y ambiciones que a veces me hicieron perder el rumbo. Pero gracias a ti sigo aprendiendo y creciendo. Tu amor por tu patria me hizo replantear mi interior y aprender a mirar el mundo con una visión más amplia.</p>
    <p>Durante estos meses en España pasé por momentos difíciles: un país desconocido, el idioma, los fracasos en el trabajo. Fuiste tú quien me devolvió la confianza y me animó a enfrentar la vida con valentía.</p>
    <p>También sé que en el amor no hablas mucho, sino que prefieres expresarte con acciones. Y cuando llega la presión, sueles huir para protegerte. Y sé que conmigo te permites enfadarte, mostrar tu verdadero yo. Eso me hace sentir que poco a poco he entrado en tu mundo. Que puedas enojarte conmigo significa que te sientes segura, y eso, en realidad, me alegra. No quiero exigirte nada; solo deseo ser mejor persona, alguien digno de tu confianza, capaz de darte tranquilidad y felicidad.</p>
    <p>Tal vez mi cariño y mi dependencia hayan sido una carga para ti, pero créeme: tu sinceridad y tu pasión derritieron el hielo de mi corazón.</p>
    <p className="font-semibold text-rose-700">
      Si nuestro destino continúa, me esforzaré por cuidar y hacer crecer nuestra relación. 
      Y si el destino llega a su fin, de todo corazón deseo que estés bien. 
      Pase lo que pase, siempre ocuparás un lugar muy especial en mi corazón.
    </p>
    <p className="mt-4">Perdóname, Laia.<br/>Te amo, Laia.</p>
    <p className="text-right mt-6 font-semibold italic">— Xiaomache 🐎</p>

    {/* 分隔线 */}
    <div className="my-6 text-center text-rose-400">🌹 🌹 🌹</div>

    {/* 中文标题 */}
    <h2 className="text-2xl font-bold text-rose-600 mb-4 text-center">致 Laia 🌹</h2>

    <p>Laia，谢谢你。我多么希望自己是你心里最在乎的那个人。</p>
    <p>今天我提了过分的要求，又让你落泪，我既心疼又自责。我想写下这些话，也算是一种自我救赎。</p>
    <p>你是我遇到的最特别的女生。你的思维方式、生活习惯、兴趣爱好，甚至成长经历，都让我感到新鲜而独特。你外表独立，内心却柔软，这让我忍不住想成为你依靠的肩膀，带给你安全感。</p>
    <p>你追求简单的生活方式，这点也和我不谋而合。我从很早就开始折腾，早就见惯了人性的阴暗和丑陋面，尔虞我诈、唯利是图，所以我也渴望能简简单单地经营事业、经营生活。</p>
    <p>遇见你让我感到幸运，也让我看见了自己不够成熟的一面：自卑、嫉妒、欲望与贪念，它们一度让我乱了阵脚。但正因为有你，我才不断学习成长。你对祖国的热爱，让我重新审视自己，学会用更宽广的视角去看待世界。</p>
    <p>在西班牙的这段日子，我经历了低谷：陌生的环境、语言不通、事业受挫。是你，让我重新振作，勇敢面对生活。</p>
    <p>我也明白，你在感情中习惯用行动代替言语，当压力来时，也会用逃避来保护自己。而且你会在我面前发脾气，展现真实的自己。其实，这让我觉得我逐渐走进了你的内心。你在我面前发脾气，说明你觉得安全，这让我反而感到高兴。</p>
    <p>我不想强求你什么，只希望自己能成为一个更好的人，成为值得你依靠、也能给你带来轻松和快乐的人。</p>
    <p>或许我的依赖与深情也曾给你带来负担，但请相信，你的真诚与热烈，让我的世界不再冰冷。</p>
    <p className="font-semibold text-rose-700">
      如果缘分尚在，我愿更用心去守护和经营我们的感情；倘若缘分已尽，我也真心希望你未来一切安好。无论如何，你都会是我心里最珍贵的位置。
    </p>
    <p className="mt-4">对不起，Laia。<br/>我爱你，Laia。</p>
    <p className="text-right mt-6 font-semibold italic">—— 小马车 🐎</p>
  
  {/* 浮动蜡印 */}
  {/* 浮动蜡印（绝对定位 + 微旋转） */}
<div className="absolute -bottom-3 -right-3 w-24 h-24 drop-shadow-xl rotate-[-8deg]">
  {/* 蜡印本体 */}
  <img
    src={waxSeal}
    alt="Wax Seal"
    className="w-full h-full select-none pointer-events-none"
    draggable="false"
  />

  {/* 高光覆盖层（不影响点击） */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
    <div
      className="animate-wax-shine absolute top-0 left-0 h-full w-1/3 bg-white/35 blur-md"
      style={{
        /* 让高光条有点金属感 */
        mixBlendMode: "screen",
        boxShadow: "0 0 20px rgba(255,255,255,0.25)",
      }}
    />
  </div>
</div>
  </div>
        )}
      </div>
    </>
  );
}
