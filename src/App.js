import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Styling
import './styles/sass/main.scss';

// Components
import Home from './Components/Home';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <React.Fragment>
                        <Route path='/' component={Home} />
                    </React.Fragment>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;
