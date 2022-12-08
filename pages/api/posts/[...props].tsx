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

    console.log("title: ", title);
    console.log("category: ", category);
    console.log("startPagination: ", startPagination);
    console.log("endPagination: ", endPagination);

    // const filtered = []
    const filteredCategory = blog.posts.filter((p) => p.categories.some((ctgr) => ctgr === Number(category)))
    const filteredTitle = filteredCategory.filter((p) => p.title.toLowerCase().includes(title.toLowerCase()))
    const filteredPagination = filteredTitle.filter((p, index) => index >= Number(startPagination) && index < Number(endPagination))

    return res.status(200).json(filteredPagination)
    // return filtered.length > 0
    //     ? res.status(200).json(filtered)
    //     : res.status(404).json({ message: `Post with title: ${title} not found.` })
}
