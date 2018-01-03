import React from 'react';

const MensFootwear = ({sizes, title}) => {
		
    return (
      <div>
       <h2>Men's {title} Footwear</h2>
        
        	<table>
            	<tbody>
            	<tr className="size-heading">
	            	<td>USA</td>
	            	<td>EU</td>
	            	<td>UK</td>
	            	<td>IN</td>
	            	<td>CM</td>
            	</tr>

            		{sizes.map(function(size, i) {

            			return (
            				<tr key={i}>
		            			<td>
		            			{size.usa}
		            			</td>
		            			<td>
		            			{size.eu}
		            			</td>
		            			<td>
		            			{size.uk}
		            			</td>
		            			<td>
		            			{size.in}
		            			</td>
		            			<td>
		            			{size.cm}
		            			</td>
	            			</tr>
	            			);
            		
            		
            			})

					}

            	</tbody>
        	</table>
 
      </div>
    )

}

export default MensFootwear;