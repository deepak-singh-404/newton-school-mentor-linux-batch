import React from "react"


class CCounter extends React.Component {
    constructor(){
        super()
        this.count = 0
    }
    add(){
        this.setState({count: this.count + 1})
    }
    subtract(){
        this.count = this.count - 1
    }

    render() {
        return <div>
            <h1>CLASS BASED COMPONENT</h1>
            <h1>{this.count} </h1>
        <button onClick={this.subtract} >Substract</button>
        <button onClick={this.add.bind(this)} >Add</button>
        </div>
    }
}

export default CCounter