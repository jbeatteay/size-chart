import React from 'react';
import MensFootwear from './adult/MensFootwear.js';
import WomensFootwear from './adult/WomensFootwear.js';

const ProFootwear = ({sizes}) => {
		
    return (
      <div className="text-center">
       <p>Timberland PRO® footwear is engineered to American size standards.</p>
        <MensFootwear title="PRO" sizes={sizes.filter((n) => n.gender === 'men')} />

        <WomensFootwear title="PRO" sizes={sizes.filter((n) => n.gender === 'women')} />
 
      </div>
    )

}

export default ProFootwear;