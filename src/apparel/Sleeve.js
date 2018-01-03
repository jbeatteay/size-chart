import React from 'react';

const Sleeve = ({sizes}) => {
		
    return (
    	<table>
        	<tbody>
				<tr className="row-heading">
				    <td>Sleeve</td>
				    {sizes.map((size, i) => 
				    	size.part === 'sleeve' ? <td key={i}>{size.name}</td> : null
				    )}
				    
				</tr>
				<tr>
				    <td>Inches</td>
				    {sizes.map((size, i) => 
				    	size.part === 'sleeve' ? <td key={i}>{size.in}</td> : null
				    )}
				</tr>
				<tr>
				    <td>Cenimeters</td>
				    {sizes.map((size, i) => 
				    	size.part === 'sleeve' ? <td key={i}>{size.cm}</td> : null
				    )}
				</tr>
        	</tbody>
    	</table>
    )

}

export default Sleeve;