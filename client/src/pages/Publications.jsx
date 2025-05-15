import React from 'react'
import backgroundImage from "../assets/publications_bg.jpg"  

const Publications = () => {
  const publications_list = [
    {author: "Abhishek Rastogi, Rajdeep Sarkar and ",
     title: "Transitions among martensitic phases during continuous deformation in metastable β Ti-10V-2Fe-3Al alloy",
     published: " Journal of Alloys and Compounds, Vol. 964, Article No. 171320, 2023. ",
     link: "https://www.sciencedirect.com/science/article/pii/S0925838823026233#bibliog0005"
    },
    {author: "Shrikanth S, ",
     author2: " and Rajesh Prasad",
     title: "Planes of Isotropic Shear Moduli in Anisotropic Materials",
     published: " Mechanics of Materials, Vol. 181, Article No. 104619, 2023. ",
     link: "https://www.sciencedirect.com/science/article/pii/S0925838823026233#bibliog0005"
    },
  ]
  const thesis_list = [
    {author: "Abhishek Rastogi, Rajdeep Sarkar and ",
     title: "Transitions among martensitic phases during continuous deformation in metastable β Ti-10V-2Fe-3Al alloy",
     published: " Journal of Alloys and Compounds, Vol. 964, Article No. 171320, 2023. ",
     link: "https://www.sciencedirect.com/science/article/pii/S0925838823026233#bibliog0005"
    },
    {author: "Shrikanth S, ",
     author2: " and Rajesh Prasad",
     title: "Planes of Isotropic Shear Moduli in Anisotropic Materials",
     published: " Mechanics of Materials, Vol. 181, Article No. 104619, 2023. ",
     link: "https://www.sciencedirect.com/science/article/pii/S0925838823026233#bibliog0005"
    },
  ]
  return (
    <div className='font-[Epilogue]'>
      <div style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `center`
          }} 
          className="h-[50vh] relative">
        <h1 className='text-4xl text-center font-bold absolute bottom-5 left-[50vw] translate-x-[-50%] text-[#007f39]'>
          Publications
        </h1>
      </div>
      <div className='publi mt-10 px-8 text-lg'>
        <h4 className='text-xl font-bold text-[#980000] underline pb-2'>Published Articles: </h4>
        <ul className='list-disc px-5'>
          {publications_list.map((item,index) => (
            <li key={index} className='py-1'>
              <p className='inline font-semibold'>{item.author} <span className='text-[#980000]'>Suresh Neelakantan*</span></p>
              {item.author2?<p className='inline font-semibold'>{item.author2}</p>: <></>}: { }
              <a href={item.link} className='inline underline decoration-[2px] underline-offset-2'>{item.title}</a>,
              <p className='inline italic'>{item.published}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='publi mt-10 px-8 text-lg'>
        <h4 className='text-xl font-bold text-[#980000] underline pb-2'>Thesis: </h4>
        <ul className='list-disc px-5'>
          {thesis_list.map((item,index) => (
            <li key={index} className='py-1'>
              <p className='inline font-semibold'>{item.author} <span className='text-[#980000]'>Suresh Neelakantan*</span></p>
              {item.author2?<p className='inline font-semibold'>{item.author2}</p>: <></>}: { }
              <a href={item.link} className='inline underline decoration-[2px] underline-offset-2'>{item.title}</a>,
              <p className='inline italic'>{item.published}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Publications