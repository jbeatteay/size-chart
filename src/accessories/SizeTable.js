import React from 'react';

const SizeTable = ({sizes, title}) => {
	
	let measurement = sizes[0].usa !== null ? 'country' : 'unit';

    return (
      <div>        
    	<table>
        	<tbody>
				<tr>
				    <td>{title}</td>
				    {sizes.map((size, i) => 
				    	<td key={i}>{size.name}</td>
				    )}
				    
				</tr>
				<tr>
				    <td>{ measurement === 'country' ? "US" : "IN"}</td>
				    {sizes.map((size, i) => 
				    	measurement === 'country' ? <td key={i}>{size.usa}</td> : <td key={i}>{size.in}</td>
				    )}
				</tr>
				<tr>
				    <td>{ measurement === 'country' ? "EU" : "CM"}</td>
				    {sizes.map((size, i) => 
				    	measurement === 'country' ? <td key={i}>{size.eu}</td> : <td key={i}>{size.cm}</td>
				    )}
				</tr>
        	</tbody>
    	</table>
 
      </div>
    )

}

export default SizeTable;