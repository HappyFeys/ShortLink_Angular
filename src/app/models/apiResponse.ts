export interface ApiResponse {
    result_url: string
}

export interface LinkList {
    link: Link[]
}

export interface Link {
    full_link: string
    short_link: string
}