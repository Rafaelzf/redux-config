import {types} from "../types/todo";

const addTask = task => ({
    type: types.TODO_ADD_TASK,
    payload: task
});

const actions = {
    addTask
};

export { actions };