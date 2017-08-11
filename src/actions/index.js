export const addPeople = (name, password) => {
    return {
        type: 'add',
        name: name,
        password: password,
    }
}
