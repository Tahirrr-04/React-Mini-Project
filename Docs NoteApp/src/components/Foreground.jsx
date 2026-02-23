import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = () => {

  const ref = useRef(null);

const data = [
  {desc:"Comprehensive guide to advanced JavaScript ES6+ features and patterns.",
    filesize: "1.2mb",
    close: true,
    tag:{isopen: true, tagTitle:"Download Now", tagColor:"green"}
  },
  {desc:"Full stack React Native mobile app development tutorial with source code.",
    filesize: "2.8mb",
    close: false,
    tag:{isopen: true, tagTitle:"Download Now", tagColor:"blue"}
  },
  {desc:"Python data science project - Machine Learning model deployment guide.",
    filesize: ".7mb",
    close: true,
    tag:{isopen: false, tagTitle:"Download Now", tagColor:"blue"}
  },
  {desc:"Node.js Express REST API with MongoDB - Complete project walkthrough.",
    filesize: "1.8mb",
    close: true,
    tag:{isopen: true, tagTitle:"Download Now", tagColor:"blue"}
  },
  {desc:"CSS Grid & Flexbox mastery course with 50+ responsive layouts.",
    filesize: ".5mb",
    close: false,
    tag:{isopen: true, tagTitle:"Download Now", tagColor:"green"}
  },
  {desc:"Docker containerization workshop for microservices architecture.",
    filesize: "3.1mb",
    close: true,
    tag:{isopen: false, tagTitle:"Download Now", tagColor:"blue"}
  }
];



  return (
    <div ref={ref} className='fixed z-3 w-full h-full top-0 flex gap-5 flex-wrap p-5 '>
      {data.map((item, idx)=>(
        <Card key={idx} data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground