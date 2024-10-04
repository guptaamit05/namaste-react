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
            "I'm h2 tag"
        )
    )]

);

const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(parentDiv)