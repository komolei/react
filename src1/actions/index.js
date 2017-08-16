export const sure = 'sure';
export const surePeople = (name, password) => {
    return {
        type: sure,
        name: name,
        password: password,
    }
}
export const add = 'add';
export const addPeople = (name, password, surePassword, email) => {
    return {
        type: add,
        name: name,
        password: password,
        surePassword: surePassword,
        email: email,
    }
}
export let ishow = false;
export const changeshow = 'changeshow';
export const changeShow = (ishow) => {
    return {
        type: changeshow,
        ishow: ishow,
    }

}
// export 