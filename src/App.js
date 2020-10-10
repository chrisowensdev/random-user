import React, { Component } from 'react';

import RandomUser from './components/RandomUser';
import TopNavBar from './components/TopNavBar';

import 'bulma/css/bulma.css';
import './App.css';

import { Container, Button } from 'bloomer';

class App extends Component {
    state = {
        userData: [],
    };

    loadData = async () => {
        const response = await fetch('https://randomuser.me/api?results=3');
        const data = await response.json();
        return data;
    };

    handleClick = async () => {
        const userData = await this.loadData();
        this.setState({
            userData: userData.results,
        });
    };

    async componentDidMount() {
        const userData = await this.loadData();
        this.setState({
            userData: userData.results,
        });
    }

    render() {
        const { userData } = this.state;
        return (
            <div className='App'>
                <Container isFluid>
                <header className='App-header'>
                    <h1>Random User</h1>
                </header>
                <TopNavBar />
                {this.state.userData.length ? (
                    <RandomUser userData={userData} />
                ) : (
                    <p>No user Data Loaded</p>
                )}
                <Button isColor='dark' onClick={this.handleClick}>Load More Users</Button>
                </Container>
 
            </div>
        );
    }
}

export default App;
