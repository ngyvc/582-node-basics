# Node Basics

## List of files and what they do

```index.js``` - checking out the base level variables

```add.js``` ```add-all.js``` - adding numbers example coming from the process argv list

```template.html``` - template html file for trying templating static html files

```fs-read-file.mjs``` - ESM file for reading a file

```fs-write-file.mjs``` - ESM file for writing a static html file from a template

```fs-write-file-custom.mjs``` - ESM file for writing a static html file from a template using process arguments

```app.js``` - server demo example

```anatomy.js``` - [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction) A version of this demo, but displays POST JSON data

```fs-read-with-callback.mjs``` - Reading and writing with callback with ESM style js

```fs-read-with-callback.js``` - Reading and writing with callback with CJS style js

```anatomy-template.js``` - Integrated server with template display for POST JSON data

```express-demo``` - Express basics demo with handling ```all```, ```get```, ```post``` keywords and also using ```next``` in the callback to provide middleware functionality

## Run scripts

Examples:

```js
node index.js
node add.js 123 789
node add.js hello world
node fs-write-file-custom.mjs about "About Us" "This is the about page."
```
