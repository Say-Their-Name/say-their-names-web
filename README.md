# Say Their Names ✊🏿

## Overview

Welcome to the Say Their Names project. Our aim is to build an open-source platform that raises awareness of the injustice and often forgotten names of racial inequality at the hands of law enforcement. We strive to identify and amplify verified organizations to ensure donations are reaching those who can make the most impact with it.

## Docs

- [Contributing](#contributing)
  - [Ground Rules](#ground-rules)
  - [Codebase](#codebase)
    - [Technologies](#technologies)
  - [First time setup](#first-time-setup)

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
