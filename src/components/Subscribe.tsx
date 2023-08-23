import React from 'react';

const Subscribe = (): JSX.Element =>{
    return (
        <div className="main">
            <form id='sub-form'>
                <div className="input">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input type="text" placeholder='email@company.com'/>
                </div>
                <button>Subscribe to monthly newsletter</button>
            </form>
        </div>
    );
}
export default Subscribe;
