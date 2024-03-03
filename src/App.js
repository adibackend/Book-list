
function App() {
  const BookList = () => {
    return (
      <>

        <div className="my-auto">

          <section className="grid  grid-cols-3 mx-auto  max-w-3xl my-auto gap-x-16 ">
            <Book />
            <Book />
            <Book />
          </section>
        </div>


      </>
    )
  }
  const Book = () => {
    return (
      <>
        <article className="bg-[#FFFFFF] rounded-xl font-semibold">
          <Image />
          <div className="space-y-2">

            <Title />
            <Author />
          </div>
        </article>
      </>
    )
  }
  const Image = () => {
    return (
      <>
        <div className="p-4">

          <img src="https://m.media-amazon.com/images/I/616ayioUd6L._SL1500_.jpg
" className="object-fill " alt="image hai" />
        </div>

      </>
    )
  }
  const Title = () => {
    return (
      <>
        <h2 className="text-center text-xl">Title</h2>
      </>
    )
  }
  const Author = () => {
    return (
      <>
        <h2 className="text-center  pb-4">Author</h2>
      </>
    )
  }
  return (
    <>
      <div className="bg-[#f1f5f8] h-screen flex items-center justify-center">
        <BookList />
      </div>
    </>
  );
}

export default App;
