import React, { useContext } from 'react'
import { AuthContext } from './Context';

const C2 = () => {
  let {a,b} = useContext(AuthContext);
  
    return (
      <div>
          <h1>{a}</h1>
          <h1>{b}</h1>
      </div>
    )
}

export default C2