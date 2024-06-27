import React from 'react';

import T7 from '../../Imgs/taller/T7.jpeg';
import T8 from '../../Imgs/taller/T8.jpeg';
import T9 from '../../Imgs/taller/T9.jpeg';
import T10 from '../../Imgs/taller/T10.jpeg';
import T11 from '../../Imgs/taller/T11.jpeg';
import T12 from '../../Imgs/taller/T12.jpeg';
import T13 from '../../Imgs/taller/T13.jpeg';

import './ExpCards.css';

const ExpCards = () => {
  return (
    <div className='expcards_container'>
      <div className='card'>
        <img className='background' src={T7} alt='T9' />
        <div className='card_content'>
          <svg>...</svg>
          <h3 className='title'>GTA5</h3>
        </div>
      </div>

      <div className='card'>
        <img className='background' src={T13} alt='T9' />
        <div className='card_content'>
          <svg>...</svg>
          <h3 className='title'>GTA5</h3>
        </div>
      </div>

      <div className='card'>
        <img className='background' src={T9} alt='T9' />
        <div className='card_content'>
          <svg>...</svg>
          <h3 className='title'>GTA5</h3>
        </div>
      </div>

      <div className='card'>
        <img className='background' src={T10} alt='T10' />
        <div className='card_content'>
          <svg>...</svg>
          <h3 className='title'>GTA5</h3>
        </div>
      </div>

      <div className='card'>
        <img className='background' src={T11} alt='T11' />
        <div className='card_content'>
          <svg>...</svg>
          <h3 className='title'>GTA5</h3>
        </div>
      </div>

      <div className='card'>
        <img className='background' src={T12} alt='T11' />
        <div className='card_content'>
          <svg>...</svg>
          <h3 className='title'>GTA5</h3>
        </div>
      </div>

      <div className='card active'>
        <img className='background' src={T8} alt='T11' />
        <div className='card_content'>
          <svg>...</svg>
          <h3 className='title'>GTA5</h3>
        </div>
      </div>
    </div>
  );
};

export default ExpCards;

