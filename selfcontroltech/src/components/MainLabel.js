import React, { Component } from 'react';
import moment from 'moment';
import models from '../models/models';

export default class MainLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasData: ((typeof models.getDailyReport(moment().subtract(1, "days").format('YYYY-MM-DD'))) !== "undefined")
        };
    }

    render() {
        const hasData = this.state.hasData;
        let label = null;
        if (hasData) {
            label = (
                <div className="sc-main-label">
                    <h2>Yesterday, at {moment().format('h')}</h2>
                    <h5>You were doing:</h5>
                    <h1>{models.getDailyReport(moment().subtract(1, "days").format('YYYY-MM-DD'))[moment().format('H')].tag}</h1>
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
