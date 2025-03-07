"use client"

import React from 'react'

function Toggle() {
    // ...
    const [likes, setLikes] = React.useState(0);
   
    function handleClick() {
      setLikes(likes + 1);
    }
   
    return (
      <div>
        {/* ... */}
        <button onClick={handleClick}>Likes ({likes})</button>
      </div>
    );
  }
  

export default Toggle