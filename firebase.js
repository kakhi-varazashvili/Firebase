let name = document.querySelector(".name")
let city = document.querySelector(".city")
let age = document.querySelector(".age")
let mail = document.querySelector(".mail")
let save = document.querySelector(".save")


class User{
    constructor(name,city,age,mail){
        this.name = name;
        this.city = city;
        this.age = age;
        this.mail = mail;
    }
}

class FireBaseWorker{
    firebaseRef;
    constructor(){
    this.firebaseRef = firebase.firestore()
}
async addUser(userItem){
    try{
        var json = JSON.stringify(userItem)
        var result = await this.firebaseRef.collection("users").add(JSON.parse(json))
        console.log(result)

    }
    catch(error){
        console.log("error", error);
    }
}
// async getuserById(id){
//     var result = await this.firebaseRef.collection("users").doc(id).get()
//     if(result.exists){
//         var tmp = result.data()
//         tmp.id = result.id
//         console.log(tmp)
//     }
// }
}

save.addEventListener("click", function(){
    var fbw = new FireBaseWorker()
    var user = new User(name.value, city.value, age.value, mail.value)
    fbw.addUser(user)
    // fbw.getAnimalById("13CziPoNJhinO6mwNnwb")

})
