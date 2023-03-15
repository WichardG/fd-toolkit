import type {promptItem} from './logic';

const promptChoiceOne: promptItem = {
    id: 1,
    title: 'Question One',
    description: 'Do you have a clear idea of what you want to achieve?',
    choices: [
        {id: 1, context: 'Yes'},
        {id: 2, context: 'No'},
    ],
};
const promptChoiceTwo: promptItem = {
    id: 2,
    title: 'Question Two',
    description: 'Would you prefer a method that focuses on practical, realistic solutions',
    choices: [
        {id: 1, context: 'Yes'},
        {id: 2, context: 'No'},
    ],
};
const promptChoiceThree: promptItem = {
    id: 3,
    title: 'Question Three',
    description: 'Are you interested in exploring radical, game-changing ideas?',
    choices: [
        {id: 1, context: 'Yes'},
        {id: 2, context: 'No'},
    ],
};
const promptChoiceFour: promptItem = {
    id: 4,
    title: 'Question Four',
    description:
        'Do you want to explore potential future scenarios in an abstract or conceptual way? Or,\
        are you interested in creating immersive narratives that bring possible futures to life? Alternatively,\
        would you prefer a method that analyzes trends and data to make predictions about the future?',
    choices: [
        {id: 1, context: 'Abstract or conceptual'},
        {id: 2, context: 'Detailed and immersive'},
        {id: 3, context: 'Trends and data'},
    ],
};

export const promptQuestions = [promptChoiceOne, promptChoiceTwo, promptChoiceThree, promptChoiceFour];
