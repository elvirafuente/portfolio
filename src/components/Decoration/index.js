import React from 'react';
import './styles.scss';

function Decoration() {
    let numbers = [];
    for(let i = 1 ; i< 80; i++){
        let acc = i;
        numbers.push(acc)
    }
    return (
        <div className="page__decoration">
            {numbers.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    )
}

export default Decoration;