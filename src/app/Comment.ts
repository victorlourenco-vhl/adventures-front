export interface Comment {
    id?: number,
    text: string,
    username: string,
    adventureId: number,
    creationDate: string,
    updateDate?: string
}