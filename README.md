# Hackey Finance component library

A component library package for sharing components between Hackney's services.

## Installation

NPM

```
npm i @hackney/mtfh-finance-components
```

Yarn

```
yarn add @hackney/mtfh-finance-components
```

## Development

This package expects you use `yarn` as the package manager, and use `node` with version `16.13.0`.

### Storybook

You can review components with storybook with `yarn storybook`

### Chromatic

You can find the [deployed chromatic here](https://www.chromatic.com/library?appId=61f0267fc8e670003a291a88).

## Release

_In order to publish the library you must be added to Hackney organization in NPM._

1. Login to NPM

```
npm login
```

2. Run the release script from `master` branch and follow the steps

```
npm run release
```

3. After successful publishing, release draft will be created on Github. Review it, update the description and publish.
