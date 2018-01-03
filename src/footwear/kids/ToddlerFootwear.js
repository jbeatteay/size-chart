import React from 'react';

const ToddlerFootwear = ({sizes}) => {
		
    return (
      <div>
       <h2>Toddler Footwear</h2>
        <p>Sizing (Aproximate age 6 - 10 years)</p>
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

export default ToddlerFootwear;