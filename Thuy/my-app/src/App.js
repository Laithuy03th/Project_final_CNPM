// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import LoginForm from './LoginForm';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default App;
