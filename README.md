
# untrace
Minimal event tracking on the client in **300** bytes.

-   Only **300** bytes gzipped.
-   **Easy** to use with only two functions.
-   Modern browser **support**.

<a href="https://www.npmjs.org/package/untrace">
  <img src="https://img.shields.io/npm/v/untrace.svg?style=flat" alt="npm">
</a>

<a href="https://travis-ci.org/vaneenige/untrace">
  <img src="https://travis-ci.org/vaneenige/untrace.svg?branch=master" alt="travis">
</a>

## Install

This library is built with [node](http://nodejs.org) and [npm](https://npmjs.com) and are required for installation.

**1. Install the library with npm.**
```sh
$ npm install --save untrace
```

**2. Import the library in your project.**
```javascript
import untrace from 'untrace';
```

## Usage

This library provides two functions:

**start()**

- Creates an unique hash for the browser (once).
- Creates an unique hash for the session (repeat).
- Should be configured with endpoint for all requests.

```js
const endpoint = './api';
untrace.start(endpoint);
```

**send()**

- Combines parameters with browser and session hashes.
- Custom parameters are not limited in amount.
- Posts the combined parameters to the endpoint.

```js
untrace.send({
  type: 'performance',
  value: '200ms'
});
```

## License
[MIT License](LICENSE) © [Colin van Eenige](https://use-the-platform.com/)
