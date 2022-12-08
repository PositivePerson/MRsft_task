import { useEffect } from 'react'

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

    console.log("req: ", req);
    console.log("query: ", query);
    console.log("props: ", props);

    const title = props[0]
    const category = props[1]
    const startPagination = props[2]
    const endPagination = props[3]

    // const filtered = []
    const filteredCategory = blog.posts.filter((p) => p.categories.some((ctgr) => ctgr === Number(category)))
    const filteredTitle = filteredCategory.filter((p) => p.title.toLowerCase().includes(title.toLowerCase()))

    return res.status(200).json(filteredTitle)
    // return filtered.length > 0
    //     ? res.status(200).json(filtered)
    //     : res.status(404).json({ message: `Post with title: ${title} not found.` })
}
