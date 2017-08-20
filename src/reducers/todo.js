import { addTodo, todoDelete, changeStatus } from '../actions';

//导入learcloud的todo
// let todo = JSON.parse(localStorage.getItem('todo'))
const todoReducer = (state = { todoList: [] }, action) => {
    switch (action.type) {
        case addTodo:
            return {
                todoList: [...state.todoList, {
                    id: action.id,
                    title: action.todoList,
                    status: 'uncompleted',
                    delete: 'false'
                }],
            }
        case todoDelete:
            // state.todoList.splice(action.index, 1);
            return {
                // todoList: state.todoList.splice(action.index, 1)
                // todoList: state.todoList,
                todoList: [...action.todoList],
                //我去。竟然是加。。。md
                //es6啊
            };
        case changeStatus:
            // debugger;
            let val = state.todoList.find((val, index, arr) => {
                // index === action.index ? val.status = "completed" : val.status = "uncompleted";
                if (index === action.index) {
                    if (val.status === 'completed') {
                        val.status = 'uncompleted';
                        console.log("status:", val)
                        return arr;
                    }
                    else {
                        val.status = 'completed';
                        return arr;
                    }
                }
                //find(),是返回该成员的。
            });
            return {
                todoList: [...state.todoList.fill(val, action.index, action.index + 1)]
                // todoList: state.todoList.map((item) => {
                //     item.id = action.index ? { ...state.todoList, item:{status: "completed" }} : {...state.todoList};
                // })

            }
        default:
            return state;
    }
}
export default todoReducer;