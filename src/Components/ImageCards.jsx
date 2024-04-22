import React,{useState} from 'react'

function Cards({image}) {
  const tags = image.tags.split(',')

  return (
    <div className=" rounded overflow-hidden shadow-lg">
    <img src={image.webformatURL} alt="" className="w-full h-[20rem] object-cover" />
    <div className="px-6 py-4">
      <div className="font-bold text-purple-500 text-xl mb-2">
          Photo Created By: {image.user}
      </div>
      <ul>
          <li> <strong>Views:</strong>{image.views}</li>
          <li> <strong>Download:</strong>{image.downloads}</li>
          <li> <strong>Likes:</strong>{image.likes}</li>
      </ul>
    </div>
    <div className="px-4 py-4 ">
      {tags.map((tag , index)=>{return(
        
        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 m-2 text-sm py-1 text-gray font-semibold mr-2">#{tag}</span>
        )

      })}

    </div>
  </div>
  )
}

export default Cards