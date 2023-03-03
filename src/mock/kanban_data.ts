import { v4 as uuid } from "uuid";

const itemsFromBackend = [
    {
        id: uuid(),
        title: 'Fix bug BT2',
        description: 'Purchase button in cart screen',
        date: '2023/01/15',
        priority: "High"
    },
    {
        id: uuid(),
        title: 'Add filter in register table',
        description: 'add filter to can sort (asc, desc) and by dates',
        date: '2023/01/17',
        priority: "Low"
    },
    {
        id: uuid(),
        title: 'Create export menu',
        description: 'create all design and funcionality to export files',
        date: '2023/01/23',
        priority: "Medium"
    },
    {
        id: uuid(),
        title: 'Bug received data in request http',
        description: 'the data received is duplicated when is display in client list',
        date: '2023/02/15',
        priority: "Medium"
    },
    {
        id: uuid(),
        title: 'No work sign-in',
        description: 'The request http send to server no received a response',
        date: '2023/02/24',
        priority: "High"
    }

];
   
export const data_mock = {
    [uuid()]: {
        features:{
            status: "Backlog",
            color: "#414040"
        },
        items: itemsFromBackend
    },
    [uuid()]: {
        features:{
            status: "To do",
            color: "#073fb7"
        },
        items: []
    },
    [uuid()]: {
        features:{
            status: "In Progress",
            color: "#c79c08"
        },
        items: []
    },
    [uuid()]: {
        features:{
            status: "Done",
            color: "#07a95d"
        },
        items: []
    }
};
