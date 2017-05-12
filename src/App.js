import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state string',
            cat: 0,
            name: ''
        }

        this.updateProperties = this.updateProperties.bind(this);
    }

    updateProperties(e){
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value,
            name: name
        })
    }

    render(){
        return(
            <div>
                <Input id="txt" update={this.updateProperties} />
                <Input id="cat" update={this.updateProperties} />
                <h1>{this.state.txt} - {this.state.cat}</h1>
                <h1>Last updated {this.state.name}</h1>
                <Button>I <Heart /> React</Button>
            </div>
        )
    }
}

const Input = (props) =>
    <input id={props.id} name={props.id} type="text" onChange={props.update} />


const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
    render(){
        return <span>&hearts;</span>
    }
}

export default App;
