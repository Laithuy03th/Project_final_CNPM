// LoginForm.jsx
import React from 'react';

const LoginForm = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh', backgroundColor: '#f5f5f5' }}>
            <div className="login-box p-5 bg-white rounded shadow" style={{ width: '400px' }}>
                <h2 className="text-center">Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-3">Sign In</button>
                    <button type="button" className="btn btn-secondary btn-block">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
