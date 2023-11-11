import "./styles.scss"

export function Solution() {
  return (
    <div className="HomeContent">
      <div className="HomeMetropolisSmogContainer">
        <img className="HomeMetropolisSmogImage"  src="/mapadoar.jpg" alt="Mapa" />
          <div className="HomeMetropolisSmogAboutContainer">
              <div className="SolutionTitle">Solução</div>
                <div className="SolutionDescription">
                  Como dito anteriormente, seguiremos pelo lado informativo. Pensamos em
                  desenvolver um aplicativo (Android & iOS) com uma maior acessibilidade
                  e visualização, que é atualizado constantemente conforme são
                  publicados relatórios no site da CETESB. Além disso, o aplicativo
                  acessaria a localização em tempo real do usuário (como um site de
                  clima, por exemplo) e deixaria na página inicial o nível de poluição
                  da região em que ele se encontra, juntamente com recomendações e
                  lembretes para o cuidado, por exemplo a utilização de máscaras.
                  <br /> <br />
                  Outra funcionalidade que o aplicativo ofereceria, em parceria com
                  empresas, seria uma aba em que os funcionários de certa empresa
                  receberiam recomendações sobre: trabalhar remotamente, ir ao trabalho
                  utilizando transporte público ou se não há problema em ir com o seu
                  próprio veículo
                  <br />
                  <br />
                  Por fim, a última resolução é a criação de uma interface para empresas
                  que integre os seus funcionários com lugares de coworking perto de
                  suas casas; assim, um funcionário que more longe do seu local de
                  trabalho, mas que possua um espaço de coworking por perto, pode evitar
                  emitir um alto nível de carbono/poluição ao utilizar seu automóvel e
                  ainda assim comprovar que foi trabalhar no dia (check do cartão de
                  identificação na entrada), não sendo na própria empresa. Nestalógica,
                  também seria possível desenvolver um aplicativo de carona: a própria
                  empresa cria uma conta para os seus funcionários e, desta forma, podem
                  ver quem mora próximo de quem para que possam utilizar carona e
                  economizar tanto combustível quanto a evitar a produção de carbono
              </div>
        </div>
      </div>
    </div>
  );
}


