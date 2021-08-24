import {types} from "../types/todo";

const reducer = (state = [], action) => {
    switch (action.type) {
        case types.TODO_ADD_TASK: return [...state, action.payload]     
        default: return state
    }
};

export {reducer};