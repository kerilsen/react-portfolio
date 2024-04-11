export default function Portfolio() {
    return (
      <>
      <h2>portfolio</h2>
      <section className="grid-container">
        <article className="project grid-item">
            <h3 className="app-title">My Web Page</h3>
            <p className="caption">Semantic HTML and CSS</p>
            <a href="https://kerilsen.github.io/home.html"><img
                    src="../assets/vadim-paripa-vEK0mCz4Ow0-unsplash.jpg" className="stretchimage"
                    alt="a close up of a wheat field" /></a>
        </article>

        <article className="project grid-item">
            <h3 className="app-title">Joke Box</h3>
            <p className="caption">JavaScript and API</p>
            <a href="#"><img src="../assets/pedro-forester-da-silva-9be9HgmStOk-unsplash.jpg" className="stretchimage"
                    alt="a juke box" /></a>
        </article>

        <article className="project grid-item">
            <h3 className="app-title">Mine Sweeper</h3>
            <p className="caption">CSS and JavaScript</p>
            <a href="#"><img src="../assets/andrey-metelev-DEuansgqjns-unsplash.jpg" className="stretchimage"
                    alt="colorful dice that spell out G.A.M.E." /></a>
        </article>
        <article className="project grid-item">
            <h3 className="app-title">Kids' Reading Game</h3>
            <p className="caption">REACT and SQL</p>
            <a href="#"><img src="../assets/annie-spratt-p1bHqLjKwi4-unsplash.jpg" className="stretchimage"
                    alt="a child with a book on her lap" /></a>
        </article>

        <article className="project grid-item">
            <h3 className="app-title">Shop For Me App</h3>
            <p className="caption">MERN</p>
            <a href="#"><img src="../assets/bruno-kelzer-LvySG1hvuzI-unsplash.jpg" className="stretchimage"
                    alt="a shopping cart in a parking lot" /></a>
        </article>

        <article className="project grid-item">
            <h3 className="app-title">Are You a Robot?</h3>
            <p className="caption">CSS and JavaScript</p>
            <img src="../assets/rock-n-roll-monkey-FTfjMijq-Ws-unsplash.jpg" className="stretchimage"
                alt="face of wind-up robot toy" />
        </article>
      </section>
      </>
    );
  }