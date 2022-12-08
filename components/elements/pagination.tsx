import React, { Dispatch, SetStateAction } from 'react'; // we need this to make JSX compile

type PaginationProps = {
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}

const Pagination = ({ page, setPage }: PaginationProps) => {
    const showPrevious = () => {
        setPage((page) => page - 1)
    }

    const showExact = (arg: number) => {
        setPage(arg)
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
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none"
                            onClick={showPrevious} tabIndex={-1} aria-disabled="true">Previous</button></li>
                        <li className="page-item"><button
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            onClick={() => showExact(1)}>1</button></li>
                        <li className="page-item active"><button
                            className="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                            onClick={() => showExact(2)}>2</button></li>
                        <li className="page-item"><button
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            onClick={() => showExact(3)}>3</button></li>
                        <li className="page-item"><button
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            onClick={showNext}>Next</button></li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Pagination