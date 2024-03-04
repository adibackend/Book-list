import Book from "./Book";
import displayAuthorName from "../AuthorName";
import links from "../Links";
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
export default BookList;