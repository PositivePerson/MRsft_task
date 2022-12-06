import Link from 'next/link'
import { Post } from '../../interfaces'
import * as blog from '../../blog.json'

type PostProps = {
    post: Post
}

export default function PostComponent({ post }: PostProps) {
    return (
        // <h2 className='text-2xl font-semibold'>{post.title}</h2>
        // <li>
        //     <Link href="/post/[title]" as={`/post/${post.title}`}>
        //         {post.title}
        //     </Link>
        // </li>

        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                    <img className="rounded-t-lg" src={post.imageUrl} alt={post.slug} />
                </a>
                <div className="p-6 text-left">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{post.title}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {post.excerpt}
                    </p>
                    {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                    <div className='flex gap-2'>
                        {post.categories.map(el => (
                            <span className="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-blue-600 text-white rounded">
                                {blog.categories.filter(category => category.id === el).map(category => (
                                    <>
                                        {category.name}
                                    </>
                                ))}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
