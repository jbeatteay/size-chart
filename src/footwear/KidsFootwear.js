import React from 'react';
import InfantFootwear from './kids/InfantFootwear.js';
import ToddlerFootwear from './kids/ToddlerFootwear.js';
import YouthFootwear from './kids/YouthFootwear.js';
import JuniorFootwear from './kids/JuniorFootwear.js';

const KidsFootwear = ({sizes}) => {
		
    return (
      <div className="text-center">
       
        <InfantFootwear sizes={sizes.filter((n) => n.age === 'infant')} />
        <ToddlerFootwear sizes={sizes.filter((n) => n.age === 'toddler')} />
        <YouthFootwear sizes={sizes.filter((n) => n.age === 'youth')} />
        <JuniorFootwear sizes={sizes.filter((n) => n.age === 'junior')} />
 
      </div>
    )

}

export default KidsFootwear;