# react-responsive-navbar

This is a TypeScript rewrite of a React hooks version of [react-responsive-navbar.](https://github.com/paigewilliams/react-responsive-navbar)

Nothing crazy, nothing flashy, just a simple, flexible & completely customisable
responsive navigation bar component. Check out
[this demo](https://stephanieinez.github.io/react-responsive-navbar/).

[![NPM](https://img.shields.io/npm/v/react-responsive-navbar.svg)](https://www.npmjs.com/package/@paigewilliams/react-responsive-navbar)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
pnpm i react-responsive-navbar-ts
```

## Usage

```jsx
import React from 'react'

import ResponsiveMenu from 'react-responsive-navbar'

const Example = () => (
  <ResponsiveMenu
    menuOpenButton={<div />}
    menuCloseButton={<div />}
    changeMenuOn="500px"
    largeMenuClassName="large-menu-classname"
    smallMenuClassName="small-menu-classname"
    menu={
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    }
  />
)
```

## Props

- **menuOpenButton** & **menuCloseButton**: the icons for small screens. I use
  `react-icons` in the
  [example](https://stephanieinez.github.io/react-responsive-navbar/) however
  you are free to use any `div` that you please.
- **changeMenuOn**: specify the page width as a string in `px` that you would
  like to switch between the small and large menu.
- **menu**: takes in any `div` to create your menu content.
- You can also specify individual stylings for each of the large or small menus
  by adding a `className` to **largeMenuClassName** or **smallMenuClassName**

## License

MIT © [Paige Williams](https://github.com/paigewilliams)
