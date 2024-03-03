import React from 'react';

const links = [
  {
    "url": "https://m.media-amazon.com/images/I/616ayioUd6L._SL1500_.jpg",
    "name": "Same As Ever",
    'authorName': 'Morgan Housel',
    id: 1,
  },
  {
    "url": "https://m.media-amazon.com/images/I/71NM33ZCE1L._SL1000_.jpg",
    "name": "11 Rules For Life: Secrets to Level Up",
    "authorName": "Chetan Bhagat",
    id: 2,
  },
  {


    "url": "https://m.media-amazon.com/images/I/71M+MkYZA9L._SL1500_.jpg",
    "name": "Free Will",
    "authorName": "Tim harris",
    id: 4,
  }
]

const displayAuthorName = (id) => {
  const name = links.find((name)=>name.id===id)
  console.log(name.authorName)
  
}
function App() {

  const BookList = () => {

  
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-[#f1f1f1] space-x-4'>

        {links.map((link) => {
          return (
            <>
              <Book {...link} key={link.id} displayAuthorName={displayAuthorName} />
            </>
          )
        })}

      </div>
    </>
  )
}

const Book = (props) => {
  const { name, authorName, url, displayAuthorName ,id} = props
  return (
    <>
      <div className='bg-blue-500 rounded-xl  pb-4'>
        <div>
          <img src={url} alt='Book image' className='h-[300px] w-[200px]  p-4'></img>
        </div>

        <section className='text-center  px-4 space-y-2 '>
          <h1 className='max-w-40 font-semibold text-xl'>{name}</h1>
          <p>{authorName}</p>
          <button onClick={() => displayAuthorName(props.id)}  className='bg-gray-500 px-3 py-2 rounded-xl leading-loose hover:bg-gray-600'>press me</button>
        </section>
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
