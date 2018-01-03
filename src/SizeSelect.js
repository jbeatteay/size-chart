import React from 'react';

const SizeSelect = ({selection}) => {

    return (
      <div>
        	<form name="sizeSelect">
	        	<select onChange={selection}>
	        		<option type="footwear">Adult Footwear</option>
	        		<option type="footwear-pro">PRO Footwear</option>
	        		<option type="footwear-custom">Custom Footwear</option>
	        		<option type="footwear-kids">Kids Footwear</option>
	        		<option type="apparel-men" gender="men">Men's Clothing</option>
	        		<option type="apparel-women" gender="women">Women's Clothing</option>
	        		<option type="socks">Socks</option>
	        		<option type="gloves">Gloves</option>
	        		<option type="hat">Headwear</option>

	        	</select>
        	</form>
      </div>
    )

}

export default SizeSelect;