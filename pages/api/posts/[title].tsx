import { NextApiRequest, NextApiResponse } from 'next'
import * as blog from '../../../blog.json'
import { Post } from '../../../interfaces'

type ResponseError = {
    message: string
}

export default function postHandler(
    req: NextApiRequest,
    res: NextApiResponse<Post[] | ResponseError>
) {
    const { query } = req
    const { title } = query
    const filtered = blog.posts.filter((p) => p.title.toLowerCase().includes(title.toLowerCase()))

    return filtered.length > 0
        ? res.status(200).json(filtered)
        : res.status(404).json({ message: `Post with title: ${title} not found.` })
}
