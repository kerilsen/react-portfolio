import { useEffect } from 'react';
import { GridContainer, GridItem, GridImage, AppTitle, Caption } from './Portfolio.styles';

export default function Portfolio() {

  useEffect(() => {
    document.title = "My Portfolio";
  }, []);

  return (
      <GridContainer>
        <GridItem>
          <AppTitle>Weather Dashboard</AppTitle>
          <Caption>JQuery and Server Side API</Caption>
          <a href="https://kerilsen.github.io/weather-dashboard/">
            <GridImage
              src="./assets/weather-dashboard.jpg"
              alt="a blue sky with clouds"
            />
          </a>
        </GridItem>

        <GridItem>
          <AppTitle>Code Quiz</AppTitle>
          <Caption>CSS and JavaScript</Caption>
          <a href="kerilsen.github.io/code-quiz/">
            <GridImage
              src="./assets/code-quiz.jpg"
              alt="computer screen with code"
            />
          </a>
        </GridItem>

        <GridItem>
          <AppTitle>Share Sphere</AppTitle>
          <Caption>MySQL</Caption>
          <a href="https://share-sphere-68ac42e28aff.herokuapp.com/">
            <GridImage
              src="./assets/share-sphere.png"
              alt="Painted Ladies houses with San Francisco skyline"
            />
          </a>
        </GridItem>

        <GridItem>
          <AppTitle>Text Editor</AppTitle>
          <Caption>Progressive Web App</Caption>
          <a href="https://text-editor-innl.onrender.com/">
            <GridImage
              src="./assets/JATE.png"
              alt="a computer terminal screen with Just Another Text Editor written on it"
            />
          </a>
        </GridItem>

        <GridItem>
          <AppTitle>Employee Tracker</AppTitle>
          <Caption>Node.js, MySQL</Caption>
          <a href="https://github.com/kerilsen/employee-tracker">
            <GridImage
            src="./assets/employee-tracker.png"
            alt="ASCII logo that says Employee Tracker"
          />
          </a>
        </GridItem>

        <GridItem>
          <AppTitle>Growth Garden</AppTitle>
          <Caption>GraphQL, Apollo, MERN</Caption>
          <a href="https://github.com/eaeidsath/Growth-Garden">
            <GridImage
              src="./assets/growth-garden.jpg"
              alt="Red poppies and lavender in a meadow"
            />
          </a>
        </GridItem>

        <GridItem>
          <AppTitle>Logo Maker</AppTitle>
          <Caption>Node.js, Inquirer</Caption>
          <a href="https://github.com/kerilsen/logo-maker">
            <GridImage
              src="./assets/logo-maker.png"
              alt="White letters on a blue circle background"
            />
          </a>
        </GridItem>

        <GridItem>
          <AppTitle>Work Day Scheduler</AppTitle>
          <Caption>JavaScript, API</Caption>
          <a href="https://kerilsen.github.io/work-day-scheduler/">
            <GridImage
              src="./assets/work-day.jpg"
              alt="Daily calendar book on desk"
            />
          </a>
        </GridItem>

      </GridContainer>
  );
}