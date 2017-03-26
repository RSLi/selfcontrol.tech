import React, { Component } from 'react';
import './App.css';
import MainScreen from './components/MainScreen';
import EditScreen from './components/EditScreen';
import AnalyticsScreen from './components/AnalyticsScreen';
import models from './models/models';

class App extends Component {
    constructor(props) {
        super(props);
        models.init(); //Initialize the model for the entire app
        this.state = {
            "page":"MainScreen"
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageName) {
        this.setState({
            "page": pageName
        });
    }

    render() {
        let page = null;
        if (this.state.page === "MainScreen") {
            page = (
                <div className="App-mainScreen">
                    <MainScreen onPageChange={this.handlePageChange}/>
                </div>
            )
        } else if (this.state.page === "AnalyticsScreen") {
            page = (
                <div className="App-analyticsScreen">
                    <AnalyticsScreen onPageChange={this.handlePageChange}/>
                </div>
            )
        } else {
            page = (
                <div className="App-editScreen">
                    <EditScreen onPageChange={this.handlePageChange}/>
                </div>
            )
        }
        return (
            <div>
                {page}
            </div>
        );
    }
}

export default App;
