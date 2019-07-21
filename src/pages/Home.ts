import * as _ from "lodash"

console.log(_.join([1,2,3], "456"));

interface Interface {
    name: String,
    age: Number
}

function zhchaer(prent: Interface){
    console.log(`名字:${prent.name} 年龄:${prent.age}`)
}

zhchaer({
    name:"zhcaer",
    age:33
})
