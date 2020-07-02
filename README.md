![Unit Test Workflow](https://github.com/Say-Their-Name/say-their-names-web/workflows/Unit%20Test%20Workflow/badge.svg)

# Say Their Names ✊🏿

## Overview

Welcome to the Say Their Names project. Our aim is to build an open-source platform that raises awareness of the injustice and often forgotten names of racial inequality. We strive to identify and amplify verified organizations to ensure donations are reaching those who can make the most impact with it.

## Prerequisites

Before you continue, ensure you have met the following requirements:

- You have installed NodeJS.
- You have installed NPM or Yarn.

## Setup

### Cloning the repository:

Using HTTPS:

```sh
  git clone https://github.com/Say-Their-Name/say-their-names-web.git
```

Using SSH:

```sh
  git clone git@github.com:Say-Their-Name/say-their-names-web.git
```

### Navigate to app

```sh
 cd say-their-names-web
```

### Add Environment Variable

Create a `.env` file in the root of the project and copy the contents below to the newly created `.env` file.

```
REACT_APP_API_BASE_URL=https://saytheirnames.dev/api
REACT_APP_NEWS_FETCH_PROXY=https://thingproxy.freeboard.io/fetch
REACT_APP_TWITTER_URL=https://twitter.com/SayTheirName_io
REACT_APP_FACEBOOK_URL=https://www.facebook.com/Say-Their-Names-108926117523025/?modal=admin_todo_tour
REACT_APP_INSTAGRAM_URL=https://www.instagram.com/saytheirname.io
REACT_APP_ANDROID_URL=https://play.google.com/store/apps/details?id=io.saytheirnames.android
REACT_APP_IOS_URL=https://apps.apple.com/app/say-their-names/id1517599626
```

### Installing Dependencies

Using NPM:

```sh
  npm install
```

Using Yarn:

```sh
  yarn install
```

### Running the app

Using NPM:

```sh
  npm start
```

using Yarn:

```sh
  yarn start
```

### Deploy the frontend

**Netlify**

To deploy this Strapi instance you'll need:

- [A Netlify account](https://app.netlify.com/signup) for free

Once you have created your account you can deploy your instance by clicking on this button.

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Say-Their-Name/web)

## Contributing

**We heartily welcome any and all contributions that match our engineering standards!**
Please, check out our [Contribution Guidelines](https://github.com/Say-Their-Name/say-their-names-web/blob/chore/styling/CONTRIBUTING.md#say-their-name-web-contribution-guide) to know more.

Let's have fun, let's make an impact.
