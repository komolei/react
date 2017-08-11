import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'
import React, { Component } from 'react'
import { render } from 'react-dom'
import AV from './leancloud.js'



// const count = (state = { people: [{ name: 'c', password: '' }] }, action) => {
//     switch (action.type) {
//         case 'add':
//             let nextState = state.people.push(action.people);
//             return nextState
//         default:
//             return state;
//     }
// };

// let store = createStore(count);
// let addPeople = (newname, newpassword) => {
//     return {
//         type: 'add',
//         people: {
//             name: newname, password: newpassword,
//         }
//     }

// }
//error
// let name = document.getElementById('name');
// console.log(name,"name");// 结果为null,说明是通过获取元素是娶不到的，突然想到ref，好像在react中是使用e.target.value,或ref。
// //还是先使用一下e.target.value
// // let password = document.getElementById('password').value;
//error
// let name = (e) => {
//     console.log(e.target.value,"value");
//     return e.target.value;

// }

// let add = {
//     type: "add",
//     people: {
//         name: name, password: password,
//     }
// }
// store.subscribe(() => {
//     console.log(store.getState());
// })
// console.log(reduxContent);
const count = (state = { name: '', password: '' }, action) => {
    switch (action.type) {
        case 'add':
            let newName = action.name;
            let newPassword = action.password;
            return { name: newName, password: newPassword }
        default:
            return state;
    }
};

let store = createStore(count);
// let newName = state.name;
// console.log("stateName", newName);
// let newPassword = 33;
let addPeople = (name, password) => {
    return {
        type: 'add',
        name: name,
        password: password,
    }
}
// let addP=(type)=>{

// }
// action: 描述了要发生什么的对象，
// reducer: (prestate,action)===>nextState
// 将 prestate和action传入到reducer中，返回新的state
// store就是存储state,并且监听其的变化！
// let fn = () => store.dispatch(addPeople)
// fn();
// mapStateToProps是如何将store state映射到UI组件的props上的
const mapStateToProps = (state) => {

    return {
        xxname: state.name,
        //name:state.name的映射关系是，第一个name是ui组件中的同名的参数，在本例子中为<h1>{name}</h1>
        //我们可以改变名称的，结果也不变？不变，因为我改成了xxname，
        //后一个state.name则是stata tree中的属性值。也就是上例中const count=(state={name:'xx'})中name的值

        //now I have a need 。需要从输入框输入，怎么弄。
        //查资料和想呗？不然怎么弄？
        password: state.password,
    }
}

//mapDispatchToProps接受dispatch()方法，并返回期望注入在Ui组件中的props上的回调方法
const mapDispatchToProps = (dispatch, ownProps) => {
    // console.log("ownProps",ownProps);
    // console.log("dispatch", );
    return {
        onclick: () => {
            // store.subscribe(userLogin(xxname,password))
            dispatch({ type: "add", name: "fuck", password: "222333" })
            // console.log("props", dispatch, "props", xxname);
            // dispatch(addPeople("clc", 123));
            // userLogin("clc", "123")//感觉无处下手，所以我就想到了，既然拿不到，那还不如不拿，直接在input type=password中进行调用好了
            // gg,并不可以。很难受啊。在下面的onClick中会自动的执行其中的函数。mmp；

            // fn()
            // fn调用外面的fn,即调用store.dispatch(add);
        },

    }
}

let user = new AV.User();
//   user.setUsername('clc');
//   // 设置密码
//   user.setPassword('123');
//   // 设置邮箱
//   user.setEmail('ctom@leancloud.cn');
//   user.signUp().then(function (loginedUser) {
//       console.log(loginedUser);
//   }, function (error) {
//   });
// let Error={
//     200: "Username is missing or empty",
//     202: "Username has already been taken.",
//     203: "Email has already been taken.",
//     210: "The username and password mismatch.",
//     211: "Could not find user",
//     217: "Invalid username, it must be a non-blank string.",
//     219: "登录失败次数超过限制，请稍候再试，或者通过忘记密码重设密码。",
//     400: "Could not find user",
// }用不上。。。
let userLogin = (name, password = '') => {
    // console.log(name,"name",password,"pa");
    if (!password) { alert("please enter your password"); return }
    AV.User.logIn(name, password).then(function (loginedUser) {
        console.log(loginedUser, 'success');
        alert('success')
    }, function (error) {
        // console.log(error, "failed",code);
        // let text=XMLHttpRequest.responseText()
        // console.log("text",text);
        alert(error);
    });
}
//  userLogin("clc","123") 
//变成数字123会出错，果然还是出在数据类型上。但是考虑到password都是字符混合数字的，故还是用字符串吧
class Paa extends Component {

    render() {
        const { xxname, password, onclick } = this.props;
        // let input;
        // console.log(this.input, "input");
        // store.subscribe(() => {
        //     console.log(store.getState(), "change");
        // })
        let change = () => {
            let store1 = store.getState();
            let name = store1.name;
            let password = store1.password;
            // console.log("change",typeof store.getState(),"name:",name,"password",password);
            userLogin(name,password);
        }
        return (
            <div>
                {/* <h1>{xxname}</h1>
                <h2>{password}</h2> */}
                <label htmlFor="name">name</label>
                {/* <input type="text" value={xxname} id="name" onKeyPress={name} />  */}
                {/* input中有value属性，会阻止组件的输入。因为value是跟onchange一起使用的，但在本例中不合适。因为 */}
                {/* onChange下，要是输入一个字母就改变一下redux的state，岂不是state.name只能是单个字母了 */}
                <input type="text" id="name" onChange={(e) => {
                    let val = '';
                    val += e.target.value;
                    //使用push的思想来存储上一个值。这样就好了。
                    store.dispatch(addPeople(val, ''))
                    console.log("value", val);
                }} onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        userLogin(xxname, '');
                    }
                }}
                    ref={node => { this.input = node }}
                />
                {/* onKeyPress={(e) => {
                    let val = e.target.value;
                    if (e.key === 'Enter') {
                        store.dispatch(addPeople(val, ''))
                        userLogin(val, );
                        {/* onclick()//error。感觉调用不了。还是自己水平太差咯 */ }
                {/*  }
                  }} */}
                {/* ,因为使用了字符串的拼接，所以这部分不需要了，但是想到要是有人在故意只输入name并不输入密码，需要报错，但是想到可以在userLogin中给予报错，还是不要了 */}
                <hr />
                <label htmlFor="password">password</label>
                <input type="password" id="password" onChange={(e) => {
                    let val = '';
                    val += e.target.value;
                    {/* val= */ }
                    store.dispatch(addPeople(xxname, val))

                    console.log("value", val);
                }} onKeyPress={(e) => {
                    let val = e.target.value;
                    if (e.key === 'Enter') {
                        console.log("xxxname", xxname);
                        {/* store.dispatch(addPeople(xxname, val)) */ }
                        userLogin(xxname, val);
                    }
                }} />
                <hr />
                {/* <button onClick={onclick}>Login</button> //为了响应mapDispatchToProps的 */}

                {/* <button onClick={(xxname,password) => {
                    event.preventDefault();
                    userLogin(xxname, password)
                }}>Login</button> */}
                <button onClick={change}>click</button>
                {/* 终于搞定了，虽然丑了点，水平上来再优化吧 */}
            </div>

        )
    }
}
let c = document.getElementById('cc');
const Pa = connect(
    mapStateToProps,
    mapDispatchToProps
)(Paa);


render(<Provider store={store}>
    <Pa />
</Provider>, c)

/*redux 数据流
// 1. 调用store.dispatch(action)去发送action
//     action是什么？是一个描述要发生什么的对象
        其能在任何地方被调用，形式为store.dispatch(action);

// 2. 编写reducers
//     这个去修改store中的state的。
//  let reducer=(preState,action){
        switch(action.type){
            case: type
                return something
        }
    }
    
   
    3. 合并根reducer，通过子reducer
    对于复杂的reducer,我们可以拆分，形成各个逻辑进行reducer,
    然后再调用combineDispatch，
    例子： let reducers=combineDispatch({
        one,
        two,
    })
    然后let store=createStore(reducers);
    这样在调用函数的时候，会调用其中的one,two。

    4. 初始化store ，let store=createStore(reducer);
    其保留了根reducers返回的完整state tree
    然后可以使用 store.subscribe(),unsubscribe()，getState();
*/