import { useEffect, useState } from 'react'
import useSWR from 'swr'
// import PersonComponent from '../components/elements/Person'
import PostComponent from '../components/elements/Post'
import GalleryComponent from '../components/elements/Gallery'
import ModalComponent from '../components/elements/Modal'
// import { Person } from '../interfaces'
import { Post } from '../interfaces'

import Pagination from '../components/elements/pagination'
import SearchBar from '../components/elements/searchBar'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)

  const resultsPerPage = 6

  //                              /api/posts/category/startPagination/endPagination/title
  const { data, error } = useSWR(`/api/posts/0/${(page - 1) * resultsPerPage}/${page * resultsPerPage}/${searchValue}`, fetcher)

  const handleSearch = (text: string) => {
    setSearchValue(text)
  }

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className='text-center py-16 h-full flex-col justify-between items-between'>
      <h1 className='font-semibold text-5xl mb-16'>Emersoft Blog</h1>

      <ModalComponent />
      <SearchBar handleSearch={handleSearch} />
      {/* {data.map((p: Post) => (
          <>
            <span className='text-3xl'>Next person: </span>
            <PostComponent key={p.id} post={p} />
          </>
        ))} */}
      <div className="py-16">
        <GalleryComponent data={data} />
      </div>

      {/* isLastPage: There is a small chance if(data.length % resultsPerPage ===0) then we will see blank page as last page */}
      <Pagination page={page} setPage={setPage} isLastPage={data.length < resultsPerPage} />
    </div>
  )
}
