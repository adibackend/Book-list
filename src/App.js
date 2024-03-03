import React from 'react';

const links =  [
  {
    "url": "https://m.media-amazon.com/images/I/616ayioUd6L._SL1500_.jpg",
    "name": "Same As Ever",
    'authorName': 'Morgan Housel',
  },
  {
    "url": "https://m.media-amazon.com/images/I/61E0unKRIZL._SL1500_.jpg",
    "name": "11 Rules For Life: Secrets to Level Up",
    "authorName": "Chetan Bhagat",
  },
  {


    "url": "https://m.media-amazon.com/images/I/71M+MkYZA9L._SL1500_.jpg",
    "name": "Free Will",
    "authorName": "Tim harris",
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
      <div className='flex justify-center items-center h-screen gap-5 bg-[#f1f1f1] '>

      {links.map((n)=>{
        return(
          <>
       <article >
              <div className='bg-blue-500 pb-4 rounded-xl max-w-xs'>

        <section>

          <img src={n.url} alt='asdf' className='h-[300px] w-[200px] p-4 '></img>
        </section>
        <section className='text-center  px-4 '>
                  <h1 className='max-w-44'>{n.name}</h1>
<p>{n.authorName}</p>
        </section>
      </div>
       </article>
          </>
        )
      })}
      </div>
      </>
    )
  }


  return (
    <>
      <div className=" h-screen w-screen ">
        <BookList />
      </div>
    </>
  );
}

export default App;
