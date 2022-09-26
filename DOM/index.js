function buttonClickFunction() {
    // const button = document.getElementById('button')
    // button.innerText = "NEW BUTTON"
    const mainBody = document.getElementById('mainBody')
    // mainBody.appendChild = `<h1>NEWLY ADDED H1 TAG</h1>`

    const node = document.createElement("h1");
    const textnode = document.createTextNode("NEWLY ADDED");
    node.appendChild(textnode);
    console.log(node)
    mainBody.appendChild(node)
}


