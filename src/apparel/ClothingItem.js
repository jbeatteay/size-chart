import React from 'react';
import Chest from './Chest.js';
import Waist from './Waist.js';
import Sleeve from './Sleeve.js';
import Neck from './Neck.js';
import Hip from './Hip.js';

const MensText = () => {

    return (

		<p>Neck:  Measure around the base of your neck, inserting your forefinger 
		between the tape and your neck to allow ease in fit.
		<br/><br/>
		Inseam:  Measure a similar pant that fits you well.  Measure along the inseam, 
		from the crotch seam to the bottom of the hem.</p>

    )

}

const WomensText = () => {

    return (

		<p>Hip:  Measure around the fullest part of your hip, 
		place your index finger between your hip and the tape to allow ease in fit.</p>

    )

}

const ClothingItem = ({sizes, gender}) => {

    return (

    	<div>
    		<h2>{gender} Clothing</h2>
			<Chest sizes={sizes} />
			<Waist sizes={sizes} />
			<Sleeve sizes={sizes} />
			{gender === 'men' ? <Neck sizes={sizes} /> : <Hip sizes={sizes} /> }


			<h3>How to Measure Yourself for a Great Fit</h3>
			<p>Hint:  for the most accurate results, measure yourself in your undergarments.</p>
			<br/>

			<p>Chest:  Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</p>

			<p>Waist:  Measure around your waist, slightly below your natural waist, where you normally wear your pants.  Insert your forefinger between the tape and your body to allow ease in fit.</p>
		
			<p>Sleeve Length:  Bend your arm slightly.  Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</p>

			{gender === 'men' ? <MensText /> : <WomensText /> }
		</div>


    )

}

export default ClothingItem;