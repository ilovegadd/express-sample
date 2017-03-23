# samples application using express framework

# Features

# Getting Started

## infrastructures
node.js application.
available on azure webapps, gcp appengine or aws elastic beanstalk.

## languages
typescript

* TypeScript(https://www.typescriptlang.org/)

## devlopment
install node package modules.

```shell
npm install
```
* npm(https://www.npmjs.com/)


typescript to javascript.

```shell
npm run build -- -w
```

start a local server.

```shell
npm start
```

access (http://localhost:8080).


## Required environment variables
```shell
set NODE_ENV=**********environment name**********
```

only on Aure WebApps

```shell
set WEBSITE_NODE_DEFAULT_VERSION=**********node.js version**********
set WEBSITE_TIME_ZONE=Tokyo Standard Time
```


# tslint

* [tslint](https://github.com/palantir/tslint)
* [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)

You can use a command `npm run check`.


# clean
`npm run clean`


# test
You can use a command `npm test`.


# versioning
You can use a command `npm version patch -f -m "enter your commit comment..."`.
