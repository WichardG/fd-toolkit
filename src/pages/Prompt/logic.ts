// types
export interface promptChoice {
    id: number,
    context: string,
    selected: boolean,
}
export interface promptItem {
    id: number
    title: string,
    description: string,
    choices: promptChoice[],
}

// methodes
