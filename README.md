# Game of Thrones Data Base on React

A single page application for the Game of Thrones universe written in React and using asynchronous api requests.

## Contents

- [Game of Thrones Data Base on React](#game-of-thrones-data-base-on-react)
  - [Contents](#contents)
  - [Experience 🎓](#experience)
  - [Demo 🎥](#demo)
  - [How to Use 🔧](#how-to-use)
    - [Prerequisites 📋](#prerequisites)
    - [Running 🚀](#running)
  - [Features and structure 📓](#features-and-structure)
    - [Features](#features)
      - [Create React App](#create-react-app)
      - [Styled components](#styled-components)
      - [Using an API](#using-an-api)
      - [The Component Lifecycle](#the-component-lifecycle)
      - [React Router](#react-router)
      - [React Patterns](#react-patterns)
    - [Structure](#structure)

<h2 id="experience">Experience 🎓</h2>

In this project, I study and practice the following things:

- Fetch / Async / Await;
- Asynchronous API requests ([An API of Ice and Fire](https://anapioficeandfire.com/));
- Connecting a custom third party [spinner](https://loading.io/);
- Regular Expressions;
- Lifecycle Methods;
- Error Boundaries and Error Handling;
- React Patterns;
- React children;
- React Router;
- Default props;
- Higher Order Components;
- Hooks.

<h2 id="demo">Demo 🎥</h2>

The completed project can be viewed [here](https://gnobious.github.io/game-of-thrones-spa/ "demo url")

<h2 id="how-to-use"> How to Use 🔧</h2>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

<h3 id="prerequisites">Prerequisites 📋</h3>

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.
Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

<h3 id="running">Running 🚀</h3>

From your command line, first clone "game-of-thrones-spa":

```bash
# Clone this repository
$ git clone https://github.com/gnobious/game-of-thrones-spa.git

# Go into the repository
$ cd game-of-thrones-spa

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn start
```

**NOTE**:
If your run into issues installing the dependencies with NPM, use this command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root
```

Once your server has started, go to this url `http://localhost:3000/game-of-thrones-spa` and you will see the website running on a Development Server:

![Web App started](/src/references/example.png)

<h2 id="features-and-structure">Features and structure 📓</h2>

### Features

#### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It sets up development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes app for production.

Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses **Babel** and **Webpack**.

#### Styled components

The project uses [Styled components](https://styled-components.com/), which allows you to style each individual module and element directly from the corresponding JS.

```jsx
//Exmple of usage styled components
...
import styled from 'styled-components';
...
const HeaderTitle = styled.div`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;
...
const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to='/'>
                    Game of Thrones DB
                </Link>
            </HeaderTitle>
            ...
        </HeaderBlock>
    );
};
export default Header;
```

#### Using an API

The data comes to the project via asynchronous requests to the [Ice and Fire API](https://anapioficeandfire.com/).
The application requests the following resources from the API:

- Characters;
- Houses;
- Books.

To process the requested data, a `gotService` module is written that converts them to the format required for the SPA.

#### The Component Lifecycle

The project uses some lifecycle methods for flexible rendering of application elements:

- **componentDidMount()**
  Method are called when an instance of a component is being created and inserted into the DOM;
- **componentDidUpdate**
  Method are called when a component is being re-rendered;
- **componentWillUnmount()**
  Method is called when a component is being removed from the DOM;
- **componentDidCatch()**
  Method are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

#### React Router

React Router is a declarative library for creating a page navigation simulation within a SPA.

Router creates a **history** object, which it uses to keep track of the current location and re-render the website whenever that changes.

```jsx
// Using React router in a project
import {BrowserRouter as Router, Route} from 'react-router-dom';
...
<Router
  basename="/game-of-thrones-spa">
  <div className="app">    
    <Container>
      ...
      <Route path='/characters' component={CharacterPage}/>            
      <Route path='/houses' component={HousesPage}/>
      <Route path='/books' exact component={BooksPage}/>
      <Route path='/books/:id' render={
        ({match}) => {
          const {id} = match.params;
        return <BooksItem bookId={id} />}
      }/>
    </Container>
  </div>
</Router>
```

#### React Patterns

To avoid code repetition, the application components have been improved using various "React patterns":

- Stateless function
- Destructuring Arguments
- Render callback
- Proxy component
- Layout component
- Container component
- Higher-order component

### Structure

The project has a modular structure of the **React** application.
The "*camelCase*" style is selected for naming the project files.
The main part of the application is located in the `src` directory.
The application is divided into `components`:

- `app`
- `errorMessage`
- `header`
- `itemDetails`
- `itemList`
- `pages`
  - `booksItem.js`
  - `booksPage.js`
  - `characterPage.js`
  - `housesPage.js`
- `randomChar`
- `rowBlock`
- `spinner`

Each component has, in addition to the main file, a style file in css format and an `index.js` for convenience when exporting.

Receiving and Processing data from the API is assigned to the `gotService.js` module in the `services` folder.

All components are assembled in the `app`, and then imported into the main `index.js` and there they are rendered to the web page (`index.html` inside `public` folder).
