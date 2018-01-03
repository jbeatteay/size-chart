import React from 'react';

const Hip = ({sizes}) => {
		
    return (
    	<table>
        	<tbody>
				<tr className="row-heading">
				    <td>Hip</td>
				    {sizes.map((size, i) => 
				    	size.part === 'hip' ? <td key={i}>{size.name}</td> : null
				    )}
				    
				</tr>
				<tr>
				    <td>Inches</td>
				    {sizes.map((size, i) => 
				    	size.part === 'hip' ? <td key={i}>{size.in}</td> : null
				    )}
				</tr>
				<tr>
				    <td>Cenimeters</td>
				    {sizes.map((size, i) => 
				    	size.part === 'hip' ? <td key={i}>{size.cm}</td> : null
				    )}
				</tr>
        	</tbody>
    	</table>
    )

}

export default Hip;