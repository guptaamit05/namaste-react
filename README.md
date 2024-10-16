React series from basic to advanced all will be covered.

#Redux Toolkit: 1. Install two library @reduxjs/toolkit and react-redux 2. Build our own Store 3. will connect our store to our app (make a bridge) 4. Slice (we will create a cart slice) 5. dispatch action (when we click on a button) 6. Selector

Types of Testing: 1. Unit Testing
Test your Component in isolation ( Header comp is rendering proper or not means Testing one Comp in isolation) 2. Integration Testing
Testing the integration of the component ( when we have large application) testing that include more than one component and they are talking to each other... 3. End to End Testing (EtoE Testing)
testing the react app, ASA user land the app (login, searching adding, checkout....logout.) what the user will do across the app that is EtoE testing... needed Tools


<!-- -------------------------------------------------------------------- -->
Libraries needed for Testing:
@testing-library/react

React Testing Library build up top of DOM testing library, It added more react feature in dom testing..
DOM and React Testing Lib uses Jest behind the scene.

     npm install -D @testing-library/react
     npm install -D jest

Dependencies for babel also need to install:
npm install --save-dev babel-jest @babel/core @babel/preset-env

now create babel.config.js file and paste below code:
module.exports = {
presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

Configure parcel config file to disabled default babel transpilation... (created .parcelrc file...)


# Steps for Setting up Testing in our app
    install React Testing Library
    install jest
    install babel dependencies
    Configure Babel
    Configure parcel config file to disabled default babel transpilation.
    npm run test   // called jest
    Now we have to write test cases...
    Jest Configuration:
        Now writing jest Configuration
        npx jest --init   (Create a new configuration file for jest)
jsdom  (it is like a browser, where our test cases will be run..)

install jsdom library...
    npm install -D jest-environment-jsdom

    __test__ folder,   (  _ _ is known as Dunder method,  two underscore )
    Headers.test.js
    Headers.test.ts
    Headers.spec.js
    Headers.spect.ts

add LIbrary:   npm i @babel/preset-react  ( to make jsx work in test cases)...
Also include into babel config..

npm install @testing-library/jest-dom   

<!-- ------------------------------------------------------------------ -->

Note: 
    Pascel uses Babel behind the scene.
    Babel is a JS Compiler..

We create .parcelrc file to fix the conflict of babel of parcel and testing library babel configuration..
