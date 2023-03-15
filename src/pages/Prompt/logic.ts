// types
export interface promptChoice {
    id: number;
    context: string;
}
export interface promptItem {
    id: number;
    title: string;
    description: string;
    choices: promptChoice[];
}

// methodes
