import { useEffect, useState } from 'react'
import useSWR from 'swr'
// import PersonComponent from '../components/elements/Person'
import PostComponent from '../components/elements/Post'
import GalleryComponent from '../components/elements/Gallery'
// import { Person } from '../interfaces'
import { Post } from '../interfaces'

import Pagination from '../components/elements/pagination'
import SearchBar from '../components/elements/searchBar'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  // const { data, error } = useSWR('/api/people', fetcher)
  const { data, error } = useSWR('/api/posts', fetcher)
  const [filtered, setFiltered] = useState('')
  const [input, setInput] = useState('Li')

  useEffect(() => {
    console.log("data: ", data);
    console.log("error: ", error);

    if (data) {
      const filterData = data.filter(el => el.title.startsWith(input));
      console.log("filterData: ", filterData)
      setFiltered(filterData)
    }
  }, [input, data, error])

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className='text-center pt-16 h-full flex-col justify-between items-between'>
      <h1 className='font-semibold text-5xl mb-16'>Emersoft Blog</h1>
      <SearchBar input={input} setInput={setInput} />
      {/* {data.map((p: Post) => (
          <>
            <span className='text-3xl'>Next person: </span>
            <PostComponent key={p.id} post={p} />
          </>
        ))} */}
      <div className="py-16">
        <GalleryComponent data={filtered} />
      </div>
      <Pagination />
    </div>
  )
}
