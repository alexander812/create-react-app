import React from 'react';

class App extends React.Component {
    render(){
        let propsText = this.props.text;
        return(
            <div>
                <h1>{propsText}</h1>
                <b>{this.props.cat}</b>
            </div>
        )
    }
}

App.propTypes = {
    text: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    text: "this is the default text",
    cat: 4
}

export default App;
