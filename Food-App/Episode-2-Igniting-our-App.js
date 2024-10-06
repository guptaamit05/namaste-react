import React from 'react'
import ReactDOM from 'react-dom/client';
const parentDiv = React.createElement(
    'div',
    { id: "parent" },
    [React.createElement(
        'div',
        { id: "child" },
        React.createElement(
            'h1',
            {},
            "I'm h1 tag"
        )
    ),
    React.createElement(
        'div',
        { id: "child2" },
        React.createElement(
            'h2',
            {},
            "trhi is pawer full thing done by parcel to autolod on each time when we change something.."
        )
    )]
);

const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(parentDiv)