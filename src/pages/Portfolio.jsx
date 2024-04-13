export default function Portfolio() {
  return (
    <>
      <h2>portfolio</h2>
      <section className="grid-container">
        <article className="project grid-item">
          <h3 className="app-title">Weather Dashboard</h3>
          <p className="caption">JQuery and Server Side API</p>
          <a href="https://kerilsen.github.io/weather-dashboard/">
            <img
              src="../assets/weather-dashboard.jpg"
              className="stretchimage"
              alt="a blue sky with clouds"
            />
          </a>
        </article>

        <article className="project grid-item">
          <h3 className="app-title">Code Quiz</h3>
          <p className="caption">CSS and JavaScript</p>
          <a href="kerilsen.github.io/code-quiz/">
            <img
              src="../assets/code-quiz.jpg"
              className="stretchimage"
              alt="computer screen with code"
            />
          </a>
        </article>

        <article className="project grid-item">
          <h3 className="app-title">Share Sphere</h3>
          <p className="caption">MySQL</p>
          <a href="https://share-sphere-68ac42e28aff.herokuapp.com/">
            <img
              src="../assets/share-sphere.png"
              className="stretchimage"
              alt="Painted Ladies houses with San Francisco skyline"
            />
          </a>
        </article>

        <article className="project grid-item">
          <h3 className="app-title">Text Editor</h3>
          <p className="caption">Progressive Web App</p>
          <a href="#">
            <img
              src="../assets/JATE.png"
              className="stretchimage"
              alt="a computer terminal screen with Just Another Text Editor written on it"
            />
          </a>
        </article>

        <article className="project grid-item">
          <h3 className="app-title">Employee Tracker</h3>
          <p className="caption">Node.js, MySQL</p>
          <a href="https://github.com/kerilsen/employee-tracker"><img
            src="../assets/employee-tracker.png"
            className="stretchimage"
            alt="ASCII logo that says Employee Tracker"
          />
          </a>
        </article>

        <article className="project grid-item">
          <h3 className="app-title">Growth Garden</h3>
          <p className="caption">GraphQL, Apollo, MERN</p>
          <a href="https://github.com/eaeidsath/Growth-Garden">
            <img
              src="../assets/growth-garden.jpg"
              className="stretchimage"
              alt="Red poppies and lavender in a meadow"
            />
          </a>
        </article>

        <article className="project grid-item">
          <h3 className="app-title">Logo Maker</h3>
          <p className="caption">Node.js, Inquirer</p>
          <a href="https://github.com/kerilsen/logo-maker">
            <img
              src="../assets/logo-maker.png"
              className="stretchimage"
              alt="White letters on a blue circle background"
            />
          </a>
        </article>

        <article className="project grid-item">
          <h3 className="app-title">Work Day Scheduler</h3>
          <p className="caption">JavaScript, API</p>
          <a href="https://kerilsen.github.io/work-day-scheduler/">
            <img
              src="../assets/work-day.jpg"
              className="stretchimage"
              alt="Daily calendar book on desk"
            />
          </a>
        </article>

      </section>
    </>
  );
}
