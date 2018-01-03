import React from 'react';
import MensFootwear from './adult/MensFootwear.js';
import WomensFootwear from './adult/WomensFootwear.js';

const Footwear = ({sizes}) => {
		
    return (
      <div className="text-center">
       <p>Timberland® footwear is engineered to American size standards.  The following charts will help you convert your international size.</p>

        <MensFootwear sizes={sizes.filter((n) => n.gender === 'men')} />

        <WomensFootwear sizes={sizes.filter((n) => n.gender === 'women')} />
 
      </div>
    )

}

export default Footwear;