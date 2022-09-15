import React from 'react';
import loading from './loading.gif';

function Spinner(){  
    return (
      <div className='text-center'>
        <img src={loading} className="my-3" alt="Loading.." />
      </div>
    )
  
}
export default Spinner
