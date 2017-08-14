export const add = 'add';
export const addPeople = (name, password) => {
    return {
        type: add,
        name: name,
        password: password,
    }
}
