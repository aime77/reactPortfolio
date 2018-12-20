import React from "react";
import { Image, Reveal } from "semantic-ui-react";

const PortfolioCards = props => {
  return (
    <div>
      <div className="col-lg-12 col-md-12 col-sm-12 my-5 row">
        <a href="https://nyramirez.github.io/Threat-Alert-P1/">
          <Reveal animated="move right">
            <Reveal.Content visible>
              <Image src="../images/project1.png" size="medium" circular/>
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src="../images/threatAlert.gif" size="medium" circular/>
            </Reveal.Content>
          </Reveal>
        </a>

        <div className="ui card col-6 mx-3 my-0 px-3 py-3">
          <div className="header">Threat Alert</div>
          <a
            className="GitHubLink"
            href="https://github.com/nyramirez/Threat-Alert-P1/tree/master"
          >
            GitHub Link
          </a>
          <div className="cardContent">
            Face recogniziton app.
            <br />
            Technologies: * Javascript * Firebase * Trackui * Materialize
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 my-5 row">
        <a href="https://find-friends-4-ever.herokuapp.com/">
          <Reveal animated="move">
            <Reveal.Content visible>
              <Image src="../images/friendFinder.png" size="medium" circular/>
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image
                className="hiddenGif"
                src="../images/friendFinder.gif"
                size="medium"
                circular/>
            </Reveal.Content>
          </Reveal>
        </a>

        <div className="ui card col-6 mx-3 my-0 px-3 py-3">
          <div className="header">Friend Finder</div>
          <a
            className="GitHubLink"
            href="https://github.com/aime77/FriendFinder"
          >
            GitHub Link
          </a>
          <div className="cardContent">
            App to find a friend based of survey scores.
            <br />
            Technologies: * Javascript * Nodejs * Heroku * Mysql
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 my-5 row">
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image src="../images/getBurger.png" size="medium" circular/>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src="../images/burger.gif" size="medium" circular/>
          </Reveal.Content>
        </Reveal>
        <div
          className="ui card col-6 mx-3 my-0 px-3 py-3"
          href="https://yum-yum-burger-pos.herokuapp.com/"
        >
          <div className="header">Get a Burger!</div>
          <a className="meta" href="https://github.com/aime77/sequalizedBurger">
            <div className="GitHubLink"> GitHub Link</div>
          </a>
          <div className="cardContent">
            POS app to order and cash burgers.
            <br />
            Technologies: * Javascript * Sequelize * Nodejs * Heroku
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 my-5 row">
        <Reveal animated="move right">
          <Reveal.Content visible>
            <Image src="../images/triviaImage.png" size="medium" circular/>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src="../images/triviaGame.gif" size="medium" circular/>
          </Reveal.Content>
        </Reveal>
        <div
          className="ui card col-6 mx-3 my-0 px-3 py-3"
          href="https://aime77.github.io/TriviaGame/"
        >
          <div className="header">Trivia Game</div>
          <a className="GitHubLink" href="https://github.com/aime77/TriviaGame">
            GitHub Link
          </a>
          <div className="cardContent">
            App to test you knowledge about the brain!
            <br />
            Technologies: * Javascript * CSS * Html
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 my-5 row">
        <Reveal animated="move right">
          <Reveal.Content visible>
            <Image src="../images/RPG.png" size="medium" circular/>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src="../images/RPG.gif" size="medium" circular/>
          </Reveal.Content>
        </Reveal>
        <div
          className="ui card col-6 mx-3 my-0 px-3 py-3"
          href="https://github.com/aime77/RPG-Game"
        >
          <div className="header">RPG Hero Game</div>
          <a className="GitHubLink" href="https://aime77.github.io/RPG-Game/">
            GitHub Link
          </a>
          <div className="cardContent">
            Fun RPG dynamic game app!
            <br />
            Technologies: * Javascript * JQuery* Html * CSS
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioCards;
