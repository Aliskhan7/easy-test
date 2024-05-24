import React from 'react';

const Card = () => {
    return (
        <div className='cards'>
            <div className='cards-item'>
                {/*<img src={} alt="img"/>*/}
                <p className='cards-item_text'>
                    Шахматы
                </p>
            </div>
            <div className='cards-item'>
                {/*<img src={} alt="img"/>*/}
                <p className='cards-item_text'>
                    Шахматы. Опытный
                </p>
            </div>
        </div>
    );
};

export default Card;