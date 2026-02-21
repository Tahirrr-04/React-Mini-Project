import React, { useState } from 'react'
import Card from './Card'

const Foreground = () => {

  const data = [
    {desc:"Lorem ipsum dolor sit amet consectur adipisicing.",
      filesize: ".6mb",
      close: true,
      tag:{isopen: true, tagTitle:"Download Now", tagColor:"green"}
    },
    {desc:"Lorem ipsum dolor sit amet consectur adipisicing.",
      filesize: ".4mb",
      close: true,
      tag:{isopen: true, tagTitle:"Download Now", tagColor:"sky"}
    },
    {desc:"This is an practice problem of React",
      filesize: ".9mb",
      close: true,
      tag:{isopen: true, tagTitle:"Download Now", tagColor:"#16a34a"}
    }
  ];


  return (
    <div className='fixed z-3 w-full h-full top-0 flex gap-5 flex-wrap p-5 '>
      {data.map((item, idx)=>(
        <Card key={idx} data={item}/>
      ))}
    </div>
  )
}

export default Foreground