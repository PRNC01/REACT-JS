function customRender(reactElement, container) {
    // const domElement  = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.property.href)
    // domElement.setAttribute('target', reactElement.property.traget)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for (const props in reactElement.property) {
        domElement.setAttribute(props, reactElement.property[props])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    property: {
        href: "https://google.com",
        traget: '_blank'
    },
    children: 'CLICK ME TO VISIT GOOGLE'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);