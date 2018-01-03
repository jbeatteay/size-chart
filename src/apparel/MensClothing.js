// I was able to remove MensClothing and WomensClothing and consolidate it them into ClothingItem.js

import React from 'react';
import Chest from './Chest.js';
import Waist from './Waist.js';
import Sleeve from './Sleeve.js';
import Neck from './Neck.js';

const MensClothing = ({sizes}) => {

    return (

    	<div>
    	<h2>Men's Clothing</h2>
			<Chest sizes={sizes} />
			<Waist sizes={sizes} />
			<Sleeve sizes={sizes} />
			<Neck sizes={sizes} />
		</div>
    )

}

export default MensClothing;