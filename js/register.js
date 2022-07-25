import {User} from "./model/User.js"
//Register
document.querySelector("#btnSubmit").onclick = function(e){
    e.preventDefault()
    let user = new User();
    let arrInput = document.querySelectorAll("#registerFrm input")
    for (let input of arrInput){
        let {id,value} = input
        user = {...user,[id]:value}
    }
    console.log(user)
}
