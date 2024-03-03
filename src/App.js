import React from 'react';

const links =  [
  {
    "url": "https://m.media-amazon.com/images/I/616ayioUd6L._SL1500_.jpg",
    "name": "Same As Ever",
    'authorName': 'Morgan Housel',
  },
  {
    "url": "https://m.media-amazon.com/images/I/616ayioUd6L._SL1500_.jpg",
    "name": "Same As Ever",
    "authorName": "Morgan Housel",
  },
  {


    "url": "https://m.media-amazon.com/images/I/616ayioUd6L._SL1500_.jpg",
    "name": "Same As Ever",
    "authorName": "Morgan Housel",
  }
]


function App() {
  console.log(links)
  const BookList = () => {
    return (
      <>
       
            <Book />


      </>
    )
  }

  const Book = () => {
    return (
      <>
        <article className=" rounded-xl font-semibold  ">
          <div className='grid grid-flow-col-dense place-items-center h-screen '>
            {links.map((n) => {
              return (<>  
                <div className='bg-[#FFFFFF] rounded-xl pb-4'>
                  <div className=''>
                    <img src= {n.url} alt='image' className='w-64 p-4 '></img> 
                  </div>
                  
                <div className='text-center min-w-max'>

                    <h1>{n.name}</h1>
                    <p>
                      {n.authorName}
                    </p>
                </div>
                 
              </div>
              </>)
            })}
            </div>
         
        </article>
      </>
    )
  }


  return (
    <>
      <div className=" h-full w-full ">
        <BookList />
      </div>
    </>
  );
}

export default App;
