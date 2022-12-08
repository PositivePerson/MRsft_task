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
    const { props } = query

    const category = props[0]
    const startPagination = props[1]
    const endPagination = props[2]
    const title = props[3]

    const filteredCategory = Number(category) !== 0 ? blog.posts.filter((p) => p.categories.some((ctgr) => ctgr === Number(category))) : blog.posts
    const filteredTitle = title ? filteredCategory.filter((p) => p.title.toLowerCase().includes(title.toLowerCase())) : filteredCategory
    const filteredPagination = filteredTitle.filter((p, index) => index >= Number(startPagination) && index < Number(endPagination))

    return res.status(200).json(filteredPagination)
}
