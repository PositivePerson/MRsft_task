import { NextApiResponse, NextApiRequest } from 'next'
import * as blog from '../../../blog.json'
import { Category } from '../../../interfaces'

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Category[]>
) {
    return res.status(200).json(blog.categories)
}
