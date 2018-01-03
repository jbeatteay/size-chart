import React from 'react';
import MensFootwear from './adult/MensFootwear.js';
import WomensFootwear from './adult/WomensFootwear.js';
import YouthFootwear from './kids/YouthFootwear.js';
import JuniorFootwear from './kids/JuniorFootwear.js';

const CustomFootwear = ({sizes}) => {
		
    return (
      <div className="text-center">
       
        <MensFootwear title="Custom" sizes={sizes.filter((n) => n.gender === 'men')} />

        <WomensFootwear title="Custom" sizes={sizes.filter((n) => n.gender === 'women')} />

        <YouthFootwear sizes={sizes.filter((n) => n.age === 'youth')} />
        
        <JuniorFootwear sizes={sizes.filter((n) => n.age === 'junior')} />
 
      </div>
    )

}

export default CustomFootwear;