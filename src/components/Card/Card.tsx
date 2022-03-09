import React from 'react';

const Card = ({header, children}) => {

    return <div>
        <div>
            {header}
        </div>
        <div>
            {children}
        </div>
    </div>;
};

export default Card;
