import React from 'react';

const Neck = ({sizes}) => {
		
    return (
    	<table>
        	<tbody>
				<tr className="row-heading">
				    <td>Neck</td>
				    {sizes.map((size, i) => 
				    	size.part === 'neck' ? <td key={i}>{size.name}</td> : null
				    )}
				    
				</tr>
				<tr>
				    <td>Inches</td>
				    {sizes.map((size, i) => 
				    	size.part === 'neck' ? <td key={i}>{size.in}</td> : null
				    )}
				</tr>
				<tr>
				    <td>Cenimeters</td>
				    {sizes.map((size, i) => 
				    	size.part === 'neck' ? <td key={i}>{size.cm}</td> : null
				    )}
				</tr>



        	</tbody>
    	</table>
    )

}

export default Neck;