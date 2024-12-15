export interface User {
    name: string,
    avatar: string
}

export interface Stats {
    followers: number,
    following: number
}

export type StatsType = keyof Stats