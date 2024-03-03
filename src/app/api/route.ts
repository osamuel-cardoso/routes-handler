import { Client } from '@notionhq/client'
import { NextRequest, NextResponse } from 'next/server'

const notion = new Client({
    auth: 'secret_OZlSzlg4JjaGnqIh5p3OtmjlJv2rt0rLz4HFfrL0I6e',
})

async function getNotionData() {
    const res = await notion.databases.query({
        database_id: '1ab3cf20d87446b9983e83eccf59e6de',
        auth: 'secret_OZlSzlg4JjaGnqIh5p3OtmjlJv2rt0rLz4HFfrL0I6e',
    })

    return res.results.map((result) => {
        return result
    })
}

export async function GET(request: NextRequest, response: NextResponse) {
    const data = await getNotionData()

    return NextResponse.json({ data })
}
