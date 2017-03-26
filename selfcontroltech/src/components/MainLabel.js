import React, { Component } from 'react';
import moment from 'moment';

export default class MainLable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasData:false //TODO: Actually try to find data
        }
    }

    render() {
        const hasData = this.state.hasData;
        let label = null;
        if (hasData) {
            label = (
                <div>
                    <h2>Yesterday, at {moment().format('h')}</h2>
                    <h5>You were doing:</h5>
                    <h1>Sleeping</h1>
                </div>
            );
        } else {
            label = (
                <div>
                    <h2>No Data yesterday. Enjoy today!</h2>
                    <h5>or possibly edit history reports :)</h5>
                </div>
            );
        }
        return (
            <div>{label}</div>
        );
    }
}
