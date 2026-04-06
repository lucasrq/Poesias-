import { useState } from "react";
import {Poema} from "../Content/BolinhoDeBaunilha";
import "../App.css";

const PoemaComponent = () => {
  const poema = Poema[0];

 return (
  <div className="poema-container">
    <h2>{poema.titulo}</h2>
    <div className="poema-texto">
      {poema.texto.map((texto, idx) => (
        <p key={idx} className="paragrafo">
          {texto.trim().charAt(0).toUpperCase() + texto.trim().slice(1)}
        </p>
      ))}
    </div>
  </div>
);
};

function BolinhoDeBaunilha() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero"></div>
        <div>
          <PoemaComponent />
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => (count = 1))}
        >
          <svg
            className="icon"
            role="presentation"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          Curti {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg
            className="icon"
            role="presentation"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          <h2>Significados</h2>

          <li>
            <strong>
              INEFÁVEL - Aquilo que não pode ser explicado com palavras. Tão
              único que escapa à linguagem comum. Impossível de descrever sem
              soar louco. (A forma dela de ser, seu olhar, sua presença que muda
              o ar)
            </strong>
          </li>
          <br />
          <li>
            <strong>
              PISTANTROFOBIA - Medo irracional e intenso de confiar em pessoas.
              Medo de ser traído novamente ou sofrer como sofreu antes. (O medo
              completamente válido que ela carrega das pessoas que quebraram seu
              coração)
            </strong>
          </li>
          <br />
          <li>
            <strong>
              FUGIDIO - Aquele que passa rapidamente, que é fácil de esquecer,
              que não deixa marca permanente. Transitório.
            </strong>
          </li>
          <br />
          <li>
            <strong>
              RAMÉ - Palavra balinesa que significa libertação, aquele instante
              balinês onde você respira diferente e as muralhas caem sem avisar.
              Liberdade. (O dia que passamos junto, quando ela relaxou e
              se soltou)
            </strong>
          </li>
          <br />
          <li>
            <strong>
              CICATRIZES RADICAIS - Cicatrizes profundas que vão até a raiz, 
              reais, físicas e visíveis. Que contam histórias de sobrevivência.
              (As cicatrizes reais na sua pele que eu toquei e descobriu mais
              sobre quem você.)
            </strong>
          </li>
        </div>
        <div id="social">
          <svg
            className="icon"
            role="presentation"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <h2>Dedicado a ti</h2>
          <p>
            "Para a mulher que intimida multidões. Para o doce viciante que só
            quem conhece entende. Para as cicatrizes que a tornam mais bonita.
            Para o coração que merecia cuidado. Que agora, devagar, aprende a
            deixar as muralhas caírem. Pistola nos olhos, sim, mas mão aberta.
            Por enquanto. Pela primeira vez em tempos. Por alguém que passa mas
            vê."
          </p>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default BolinhoDeBaunilha;