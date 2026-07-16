function customReact(reactElement, mainContainer) {
   /* const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    mainContainer.appendChild(domElement); */

    // better code
    const Dom = document.createElement(reactElement.type);
    Dom.innerHTML = reactElement.Children;

    // for in loop is used to iterate over object
    for (const prop in reactElement.props) {
         if (prop === 'children') continue; // this was used in older react
        Dom.setAttribute(prop, reactElement.props[prop]);
    }
    mainContainer.appendChild(Dom)
}

const reactElement = {
    type: 'a', //whats its type is it div or a or p tag and so on
    // props means property
    props: {
        href: "https://google.com",
        target : "_blank"
    },
    Children : "click me to visit google"
}

const mainContainer = document.querySelector("#root");

customReact(reactElement, mainContainer);