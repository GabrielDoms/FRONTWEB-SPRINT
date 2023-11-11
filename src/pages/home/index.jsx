import "./styles.scss";

export function Home() {
  return (
    <div className="HomeContent">
      <div className="HomeMetropolisSmogContainer">
        <img className="HomeMetropolisSmogImage" src="/poluicao.png" alt="Cidade poluída" />

        <div className="HomeMetropolisSmogAboutContainer">
          <div className="HomePresentationContainer">
            <div className="HomePresentationTitle">Sobre o que falamos?</div>
            <div className="HomePresentationDescription">
              Na luta contra a poluição, cada ação conta. Junte-se a nós em uma
              jornada de descoberta e ação para proteger nosso planeta e nossas
              futuras gerações. &quot;Solving O2&quot; mergulha nas profundezas da
              poluição ambiental, explorando suas causas, consequências e soluções.
            </div>
          </div>
          <div className="HomeMetropolisSmogAboutTitle">Como funciona nosso sistema?</div>
          <div className="HomeMetropolisSmogAboutText">
            Na metrópole, a poluição em massa se alastra como uma sombra sobre o
            horizonte urbano. Os carros congestionados expelem fumaça tóxica, as
            indústrias despejam resíduos venenosos e a população luta para
            respirar ar limpo. Nesse cenário crítico, é urgente adotar medidas
            para reduzir a poluição, proteger a saúde pública e garantir um
            futuro sustentável para nossa cidade. Juntos, podemos transformar
            essa paisagem urbana sombria em um lugar mais saudável e habitável
            para todos.
          </div>
        </div>
      </div>
    </div>
  );
}
