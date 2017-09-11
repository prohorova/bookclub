import React from 'react';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

const App = (props) => (
    <div className="main">
        <Navigation />
        <Main />
        <Footer />
    </div>
);

export default App;

