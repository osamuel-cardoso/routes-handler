interface User {
    object: string
    id: string
}

interface Status {
    id: string
    name: string
    color: string
}

interface TitleText {
    type: string
    text: {
        content: string
        link: string | null
    }
    annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color: string
    }
    plain_text: string
    href: string | null
}

export interface NotionPage {
    object: string
    id: string
    created_time: string
    last_edited_time: string
    created_by: User
    last_edited_by: User
    cover: {
        type: string
        external?: {
            url: string
        }
        file?: {
            url: string
            expiry_time: string
        }
    } | null
    icon: {
        type: string
        emoji?: string
        external?: {
            url: string
        }
        file?: {
            url: string
            expiry_time: string
        }
    } | null
    parent: {
        type: string
        database_id: string
    }
    archived: boolean
    properties: {
        Andamento: {
            id: string
            type: string
            status: Status
        }
        Projeto: {
            id: string
            type: string
            title: TitleText[]
        }
    }
    url: string
    public_url: string | null
}
