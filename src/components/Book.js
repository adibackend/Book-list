import  displayAuthorName from "../AuthorName"

const Book = (props) => {
    const { name, authorName, url, id } = props
    return (
        <>
            <div className='bg-blue-500 rounded-xl w-[200px] pb-4'>
                <div>
                    <img src={url} alt='Book image' className='h-[300px] w-[200px]  p-4'></img>
                </div>

                <section className='text-center  px-4 space-y-2  '>
                    <h1 className='max-w-max  mx-auto font-semibold '>{name}</h1>
                    <p>{authorName}</p>
                    <button onClick={() => displayAuthorName(id)} className='bg-yellow-600 px-3 py-2 rounded-xl leading-loose  hover:bg-yellow-500'>Press me</button>
                </section>
            </div>

        </>
    )
}
export default Book;