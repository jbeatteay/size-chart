import React from 'react';
import SizeTable from './SizeTable.js';





const Gloves = ({sizes}) => {

    return (
      <div>
       
        <h2>Gloves</h2>
        <SizeTable title="Men" sizes={sizes.filter((n) => n.gender === 'men')} />
        <SizeTable title="Women" sizes={sizes.filter((n) => n.gender === 'women')} />
 
      </div>
    )

}

export default Gloves;