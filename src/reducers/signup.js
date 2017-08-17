import { add } from '../actions'
const signup = (state = { name: '', password: '', email: '' }, action) => {
    switch (action.type) {
        case add:
            return {
                name: name,
                password: password,
                email: email,
            };
        default:
            return state;
    }
}
export default signup;