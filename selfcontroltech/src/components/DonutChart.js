import React, { Component } from 'react';
import renderDonut from '../lib/donut';

export default class DonutChart extends Component {
    constructor(props) {
        super(props);
        renderDonut();
    }

    render() {
        return (
            <div></div>
        );
    }
}
