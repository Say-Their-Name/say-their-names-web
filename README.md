# Say Their Names ✊🏿

## Overview

Welcome to the Say Their Names project. Our aim is to build an open-source platform that raises awareness of the injustice and often forgotten names of racial inequality at the hands of law enforcement. We strive to identify and amplify verified organizations to ensure donations are reaching those who can make the most impact with it.

## Docs

- [Contributing](#contributing)
  - [Ground Rules](#ground-rules)
  - [Codebase](#codebase)
    - [Technologies](#technologies)
  - [First time setup](#first-time-setup)
  - [Code Structure and Styling](#coding-structure-styling)

## Contributing

**We heartily welcome any and all contributions that match our engineering standards!**

That being said, this codebase isn't your typical open source project because it's not a library or package with a limited scope—it's our entire product.

### Ground Rules

#### Reporting a bug or discussing a feature idea

If you found a technical bug on Say Their Names or have ideas for features we should implement, the issue tracker is the best place to share your ideas.

#### Fixing a bug or implementing a new feature

If you find a bug on Say Their Names and open a PR that fixes it we'll review it as soon as possible.

If you want to implement a new feature, open an issue first to discuss what it'd look like and to ensure it fits in our roadmap and plans for the app (see [the trello board](https://trello.com/b/8x3mo2V5/say-their-names-web) for planned and currently ongoing work).

Want to fix a bug or implement an agreed-upon feature? Great, jump to the [local setup instructions](#first-time-setup)!

### Codebase

#### Technologies

With the ground rules out of the way, let's talk about the core architecture of this mono repo:

- **Full-stack JavaScript**: We use strapi.io as our open-source headless CMS powered by GraphQL, and React to power our frontend. Almost all of the code you'll touch in this codebase will be JavaScript.

### First time setup

The first step to running Spectrum locally is downloading the code by cloning the repository:

```sh
git clone https://github.com/Say-Their-Name/web.git
```

### Navigate to web folder

```bash
cd web

```

### Env

Create a `.env` file in the root of your project, and copy the contents of `.env.example` to the newly created `.env` file.

### Start the frontend server

```bash


# Using yarn
- yarn
- yarn start

# Using npm
- npm install
- npm start
```

Let's have fun, let's make an impact.

### Deploy the frontend

**Netlify**

To deploy this Strapi instance you'll need:

- [A Netlify account](https://app.netlify.com/signup) for free

Once you have created your account you can deploy your instance by clicking on this button.

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Say-Their-Name/web)

### Code Structure and Styling
In order to properly maintain and continuing pushing more code on this project we need to keep a consistent structure and styling.

#### ES6
In general we are going to start with rules that are within eslint

Before You Create A PR:
  - Rebase or update your branch
  - run `yarn lint`, to see if there are any linting errors (assuming Circle CI doesn't do this alreadyx5)
  - run `yarn lint:fix` if you want eslint to fix things for you.

  Note: You can always have your IDEE run eslint after save.

##### File Structure
When creating components lets make sure we have a dedicated folder for this component. Inside the component we should see.
1. [Component].js
2. styles.js

The purpose of having the styles outside of the component is to make it easier to revisit components and separate areas of concern.
The purpose of naming the component [ComponentName].js is so that it is easier to search for, instead of searching for index.js.


```
src
  - components
    - NewComponent
      - NewComponent.js
      - styles.js

```

##### [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

Don't do
```
export default function () {
  return (
    <Component />
  );
}
```

Do
```
const MyComponent = () => (
  <Component />
);

export default MyComponent;

const ConstantComponent = ( { item1, item2 } ) => {
  const combo = item1 + item2;
  return(
    <Component myProp={combo} />
  );
};

export default ConstantComponent;
```