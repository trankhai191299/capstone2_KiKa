import {User} from "./model/User.js"
//Register
document.querySelector("#btnSubmit").onclick = function(e){
    e.preventDefault()
    let user = new User();
    let arrInput = document.querySelectorAll("#registerFrm .form-control");
    let genderValue = document.querySelector("input[name='gender']:checked").value;
    let mess = ""
    for (let input of arrInput){
        let {id,value} = input
        user[id] = value
        user["gender"] = genderValue
    }
    if(user["password"]!==user["passwordConfirm"]){
        return alert("Sai mật khẩu!")
    }
    let promise = axios({
        url:"https://shop.cyberlearn.vn/api/Users/signup",
        method:"POST",
        data: user,
    })
    promise.then((result)=>{
        mess = "Đăng ký thành công"
        alert(mess);
    })
    promise.catch((e)=>{
        console.log(e)
    })
}
