export default function Portfolio() {
    return (
      <section>
        <h2>Portfolio</h2>
        <p>My projects</p>
        {/* First project should be bigger than the rest - classified as "spotlight" with a "portfolio" id for navigation */}
        <article class="spotlight" id="portfolio">
            <h3 class="app-title">Tiny Integrated Library System</h3>
            <p class="caption">Mongo DB</p>
            <a href="#"><img src="../assets/redcharlie-0RRKNIlgRZA-unsplash.jpg" class="stretchimage"
                    alt="an aisle of a large library" /></a>
        </article>
        <article class="project">
            <h3 class="app-title">My Web Page</h3>
            <p class="caption">Semantic HTML and CSS</p>
            <a href="https://kerilsen.github.io/home.html"><img
                    src="../assets/images/vadim-paripa-vEK0mCz4Ow0-unsplash.jpg" class="stretchimage"
                    alt="a close up of a wheat field" /></a>
        </article>

        <article class="project">
            <h3 class="app-title">Joke Box</h3>
            <p class="caption">JavaScript and API</p>
            <a href="#"><img src="../assets/images/pedro-forester-da-silva-9be9HgmStOk-unsplash.jpg" class="stretchimage"
                    alt="a juke box" /></a>
        </article>

        <article class="project">
            <h3 class="app-title">Mine Sweeper</h3>
            <p class="caption">CSS and JavaScript</p>
            <a href="#"><img src="../assets/images/andrey-metelev-DEuansgqjns-unsplash.jpg" class="stretchimage"
                    alt="colorful dice that spell out G.A.M.E." /></a>
        </article>
        <article class="project">
            <h3 class="app-title">Kids' Reading Game</h3>
            <p class="caption">REACT and SQL</p>
            <a href="#"><img src="../assets/images/annie-spratt-p1bHqLjKwi4-unsplash.jpg" class="stretchimage"
                    alt="a child with a book on her lap" /></a>
        </article>

        <article class="project">
            <h3 class="app-title">Shop For Me App</h3>
            <p class="caption">MERN</p>
            <a href="#"><img src="../assets/images/bruno-kelzer-LvySG1hvuzI-unsplash.jpg" class="stretchimage"
                    alt="a shopping cart in a parking lot" /></a>
        </article>

        <article class="project">
            <h3 class="app-title">Are You a Robot?</h3>
            <p class="caption">CSS and JavaScript</p>
            <img src="../assets/images/rock-n-roll-monkey-FTfjMijq-Ws-unsplash.jpg" class="stretchimage"
                alt="face of wind-up robot toy" />
        </article>
      </section>
    );
  }