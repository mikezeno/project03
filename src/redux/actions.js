//ADD_CONTACT
export const addContact = () => {
    return {
        type: 'ADD_CONTACT',
        task: {
            id: string,
            fname: string,
            lname: string,
            email: string,
            comment: string
        }
    }
}

//ADD_TASK
export const addTask = () => {
    return {
        type: 'ADD_TASK',
        task: {
            id: string,
            desc: string,
            complete: boolean
        }
    }
}

//ADD_TASK
export const completeTask = (id) => {
    return {
        type: 'COMPLETE_TASK',
        id: id
    }
}

//DELETE_CONTACT
export const deleteContact = (id) => {
    return {
        type: 'DELETE_CONTACT',
        id: id  
    }
}

//DELETE_TASK
export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id: id  
    }
}

//SET_FILTER
export const setFilter = (string) => {
    return {
        type: 'SET_FILTER',
        filter: string  //all, active, complete

    }
}