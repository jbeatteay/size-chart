import React from 'react';
import SizeTable from './SizeTable.js';

const Socks = ({sizes}) => {
		
    return (
      <div>
       
        <h2>Socks</h2>
        <SizeTable title="Men" sizes={sizes.filter((n) => n.gender === 'men')} />
        <SizeTable title="Women" sizes={sizes.filter((n) => n.gender === 'women')} />
 
      </div>
    )

}

export default Socks;