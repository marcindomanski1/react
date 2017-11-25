// // create component, set state and display it

import React from 'react';

class Application extends React.Component {
    constructor(myAwesomeProps) {
        super(myAwesomeProps);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.state = {
            count: 0
        }
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrease() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return <div>
            <h1>I have value: {this.state.count}</h1>
            <button onClick={this.increase}>+</button>
            <button onClick={this.decrease}>-</button>
        </div>
    }
}

export default Application;