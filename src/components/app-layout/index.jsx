import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Card from './Card';
import './styles.css';

class AppLayout extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='main'>
                    <header className='header'>
                        <h1 className='title'>Welcome to React</h1>
                    </header>
                    <Card />
                </div>
            </Provider>
        );
    }
}

export default AppLayout;
