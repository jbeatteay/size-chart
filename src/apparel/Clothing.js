import React from 'react';

import ClothingItem from './ClothingItem.js';


const Clothing = ({sizes, type}) => {
	let genderSizes = type === 'apparel-men' ? sizes.filter((n) => n.type === 'apparel-men') : sizes.filter((n) => n.type === 'apparel-women')
    return (
      <div>

        <ClothingItem sizes={genderSizes} gender={sizes[0].gender} />
		
      </div>
    )

}

export default Clothing;