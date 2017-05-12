import React from 'react';

class App extends React.Component {
    render(){
        let propsText = this.props.text;
        return(
            <div>
                <h1>{propsText}</h1>
            </div>
        )
    }
}

export default App;
