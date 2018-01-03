// I was able to remove MensClothing and WomensClothing and consolidate it them into ClothingItem.js

import React from 'react';
import Chest from './Chest.js';
import Waist from './Waist.js';
import Sleeve from './Sleeve.js';
import Hip from './Hip.js';

const WomensClothing = ({sizes}) => {

    return (
    	<div>
	    	<h2>Women's Clothing</h2>
			<Chest sizes={sizes} />
			<Waist sizes={sizes} />
			<Sleeve sizes={sizes} />
			<Hip sizes={sizes} />
		</div>
    )

}

export default WomensClothing;