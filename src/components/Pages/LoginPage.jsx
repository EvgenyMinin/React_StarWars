import React from 'react';

const LoginPage = ({ isLoggedIn, onLogin, loginInfo }) => {
    return (
        <div className="jumbotron">
            <p>{loginInfo}</p>
            <button
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    );
};

export default LoginPage;