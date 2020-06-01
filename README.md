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

### Start the frontend server

```bash
cd frontend

# Using yarn
yarn
yarn start

# Using npm
npm install
npm start
```


Let's have fun, let's make an impact.

### Deploy the backend

To deploy this Strapi instance you'll need:

- [A Heroku account](https://signup.heroku.com/) for free
- [A Cloudinary account for saving images](https://cloudinary.com/users/register/free) for free

Once you have created these accounts you can deploy your instance by clicking on this button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/strapi/strapi-starter-react-blog)

### Deploy the frontend

**Netlify**

To deploy this Strapi instance you'll need:

- [A Netlify account](https://app.netlify.com/signup) for free

Once you have created your account you can deploy your instance by clicking on this button.

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/strapi/strapi-starter-react-blog)
