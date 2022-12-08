import { Post } from '../../interfaces'
import * as blog from '../../blog.json'

type PostProps = {
    post: Post
}

export default function PostComponent({ post }: PostProps) {
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={post.imageUrl} alt={post.slug} />
                <div className="p-6 text-left">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{post.title}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {post.excerpt}
                    </p>
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
