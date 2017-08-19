// import addPeople from '../actions/index.js'
// console.log(addPeople(),"addPeople");
import { sure } from '../actions'
const login = (state = { name: 'cc', password: '' }, action) => {
    switch (action.type) {
        case sure:
            return {
                name: action.name,
                password: action.password,
            }
        default:
            return state;
    }
}
export default login;