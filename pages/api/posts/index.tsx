import { NextApiResponse, NextApiRequest } from 'next'
import * as blog from '../../../blog.json'
import { Post } from '../../../interfaces'

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Post[]>
) {
    return res.status(200).json(blog.posts)
}
