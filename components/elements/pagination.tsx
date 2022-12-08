import React, { Dispatch, SetStateAction } from 'react'; // we need this to make JSX compile

type PaginationProps = {
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
    isLastPage: boolean
}

const Pagination = ({ page, setPage, isLastPage }: PaginationProps) => {
    const showPrevious = () => {
        setPage((page) => page - 1)
    }

    const showNext = () => {
        setPage((page) => page + 1)
    }

    return (
        <aside>
            <div className="flex justify-center">
                <nav aria-label="Page navigation example">
                    <ul className="flex list-style-none">
                        <li className="page-item disabled"><button
                            className={`py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 ${page <= 1 ? '' : 'hover:bg-gray-200'} focus:shadow-none`}
                            onClick={showPrevious} aria-disabled={page <= 1} disabled={page <= 1}>Previous</button></li>
                        <li className="page-item"><div
                            className="py-1.5 px-8 text-blue-600"
                        >{page}</div></li>
                        <li className="page-item"><button
                            className={`py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 ${isLastPage ? '' : 'hover:bg-gray-200'} focus:shadow-none`}
                            onClick={showNext} aria-disabled={isLastPage} disabled={isLastPage}>Next</button></li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Pagination