import { useState } from 'react'
import useSWR from 'swr'
import GalleryComponent from '../components/elements/Gallery'
import ModalComponent from '../components/elements/Modal'

import Pagination from '../components/elements/pagination'
import SearchBar from '../components/elements/searchBar'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)
  const [pickedCategory, setPickedCategory] = useState(0)

  const resultsPerPage = 6

  //                              /api/posts/category/startPagination/endPagination/title
  const { data, error } = useSWR(`/api/posts/${pickedCategory}/${(page - 1) * resultsPerPage}/${page * resultsPerPage}/${searchValue}`, fetcher)
  const { data: categories, error: errorCategories } = useSWR("/api/categories", fetcher)

  const handleSearch = (text: string) => {
    setSearchValue(text)
  }

  const handleCategoryClick = (id: number) => {
    setPickedCategory(id)
  }

  if (error | errorCategories) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className='text-center py-16 h-full flex-col justify-between items-between'>
      <h1 className='font-semibold text-5xl mb-16'>Emersoft Blog</h1>

      <ModalComponent categories={categories} handleCategoryClick={handleCategoryClick} pickedCategory={pickedCategory} />
      <SearchBar handleSearch={handleSearch} />
      <div className="py-16">
        <GalleryComponent data={data} />
      </div>

      {/* isLastPage: There is a small chance if(data.length % resultsPerPage ===0) then we will see blank page as last page */}
      <Pagination page={page} setPage={setPage} isLastPage={data.length < resultsPerPage} />
    </div>
  )
}
