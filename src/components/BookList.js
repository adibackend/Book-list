import Book from "./Book";
import displayAuthorName from "../AuthorName";
import links from "../Links";
const BookList = () => {
    return (
        <>
            <div className="">

                <h1 className="block text-center py-4 font-extrabold text-xl font-serif">Amazon Best Sellers</h1>
                <div className='flex justify-center items-center h-[70vh] bg-[#f1f1f1] space-x-4'>
                    {links.map((link) => {
                        return (
                            <>
                                <Book {...link} key={link.id} displayAuthorName={displayAuthorName} />
                            </>
                        )
                    })}

                </div>
                <h1 id="hell" className="text-center text xl font-bold">  </h1>
            </div>
        </>
    )
}
export default BookList;