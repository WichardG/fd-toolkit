// types
export interface promptChoice {
    id: number,
    context: string,
    selected: boolean,
}
export interface promptItem {
    title: string,
    discription: string,
    choices: promptChoice[],
}

// methodes
