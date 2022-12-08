import { Post } from '../../interfaces'

import PostComponent from './Post'

type PostProps = {
    data: Post[],
}

export default function GalleryComponent({ data }: PostProps) {
    return (
        <section className="overflow-hidden text-gray-700 pb-8">
            <div className="container px-5 py-2 mx-auto lg:px-32">
                <div className="flex flex-wrap gap-8 justify-center -m-1 md:-m-2">
                    {data ? data.map((p: Post) => (
                        <PostComponent key={p.id} post={p} />
                    )) : <></>}
                </div>
            </div>
        </section>
    )
}
