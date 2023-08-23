import React from 'react';
import ListIcon from '../assets/images/icon-list.svg'

const Updates = (): JSX.Element =>{
    return (
        <div className="main">
            <span>
                <img src={ListIcon} alt="icon"/>
                <p>Product discovery and building what matters.</p>
            </span>
            <span>
                <img src={ListIcon} alt="icon"/>
                <p>Measuring to ensure updates are a success.</p>
            </span>
            <span>
                <img src={ListIcon} alt="icon"/>
                <p>Add much more.</p>
            </span>
        </div>
    );
}
export default Updates;
