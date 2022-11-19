class User{
    constructor(id,gender, name, surname, dateOfBirth){
        this.id = id;
        this.name = name;
        this.age = age;
        this.owner = owner;
    }
}
class FireBaseWorker{
    firebaseRef;
    constructor(){
        this.firebaseRef = firebase.firestore()
    }
    async addAnimal(animalItem){
        try{
           var json = JSON.stringify(userItem)
           var result = await this.firebaseRef.collection("User").add(JSON.parse(json))
           console.log(result)
        }
        catch(error){
            console.log("error: ",error);
        }
    }
    async getUserById(id){
        var result = await this.firebaseRef.collection("User").doc(id).get()
        if(result.exists){
            var tmp = result.data()
            tmp.id = result.id
            console.log(tmp)
        }
    }
    async getUser(){
        var arr = []
        var result = await this.firebaseRef.collection("User").get()
        result.forEach(i=>{
            var tmp = i.data()
            tmp.id = i.id
            arr.push(tmp)
        })
        console.log(arr)
    }
    async deleteUserById(id){
        var result = await this.firebaseRef.collection("user").doc(id).delete()
        console.log("deleted")
    }
}

var fbw = new FireBaseWorker()
//var animal1 = new Animal("","Rock",7,"Beka")
//var animal1 = new Animal("","arch",4,"gio")
//fbw.addAnimal(animal1)
// fbw.getAnimalById("VqGgWGGIwyYKzqMlxWzJ")
// fbw.deleteAnimalsById("VqGgWGGIwyYKzqMlxWzJ")
fbw.getAllAnimals()