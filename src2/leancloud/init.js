import AV from "leancloud-storage"
const appId = 'I2nC3Aehn27s6djgSaO3FlA1-gzGzoHsz';
const appKey = 'DBgHHwHFs0j7E26IErHT1TUc';
AV.init({ appId, appKey });
export default AV;

export const userLogin = (name, password) => {
    AV.User.logIn(name, password).then((loginedUser) => {
        console.log(loginedUser, "success");
        alert("login success");

    }, (error) => {
        alert(error + "!");
    })
}
export const userSignup = (name, password, email) => {
    let user = new AV.User();
    user.setUsername(name);
    user.setPassword(password);
    user.setEmail(email);
    user.signUp().then(() => {
        console.log("signup success");
        return true;
    }, (error) => alert(error))
}