import Link from 'next/link'
import { Post } from '../../interfaces'

import PostComponent from './Post'

type PostProps = {
    post: Post
}

export default function GalleryComponent({ data }: PostProps[]) {
    return (
        // <h2 className='text-2xl font-semibold'>{post.title}</h2>
        // <li>
        //     <Link href="/post/[title]" as={`/post/${post.title}`}>
        //         {post.title}
        //     </Link>
        // </li>

        <section className="overflow-hidden text-gray-700 ">
            <div className="container px-5 py-2 mx-auto lg:px-32">
                <div className="flex flex-wrap gap-8 justify-center -m-1 md:-m-2">
                    {data ? data.map((p: Post) => (
                        <PostComponent key={p.id} post={p} />
                    )) : <></>}

                    {/* <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
