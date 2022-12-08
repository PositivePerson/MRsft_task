import { Category } from '../../interfaces'

type CategoryProps = {
    categories: Category[],
    handleCategoryClick: (id: number) => void,
    pickedCategory: number
}

export default function ModalComponent({ categories, handleCategoryClick, pickedCategory }: CategoryProps) {
    return (
        <div className="modal z-10 fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog relative w-auto pointer-events-none">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Filter Categories</h5>
                    </div>
                    <div className="modal-body relative p-4">
                        {/* ---------------------- */}
                        <div className="flex flex-col gap-6 md:flex-row justify-center items-center">
                            {categories.map(el => (
                                <button
                                    className="flex items-center"
                                    data-bs-dismiss="modal" aria-label="Close"
                                    onClick={() => handleCategoryClick(Number(el.id))}>
                                    <div className="flex justify-center items-center h-4 w-4 border border-gray-300 rounded-sm mr-2">
                                        {el.id === pickedCategory && (

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3 h-3 text-blue-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-gray-800">
                                        {el.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                        {/* ---------------------- */}
                    </div>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button type="button" className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
