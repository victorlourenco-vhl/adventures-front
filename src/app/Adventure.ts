export interface Adventure {
    id?: number,
    title: string,
    description: string,
    image: string,
    creationDate: string,
    updateDate?: string,
    comments?: [
        {
            username: string;
            text: string
        }
    ]
}