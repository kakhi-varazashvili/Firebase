let item = document.querySelector(".item")
let color = document.querySelector(".color")
let year = document.querySelector(".year")
let add = document.querySelector(".add")


class Product{
    constructor(item,color,year, id){
        this.item = item;
        this.color = color;
        this.year = year;
        this.id = id;
    }
}

class FireBaseWorker{
    firebaseRef;
    constructor(){
    this.firebaseRef = firebase.firestore()
}
async addProduct(productItem){
    try{
        var json = JSON.stringify(productItem)
        var result = await this.firebaseRef.collection("products").add(JSON.parse(json))
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

add.addEventListener("click", function(){
    // console.log("kakhi")
    var fbw2 = new FireBaseWorker()
    var product = new Product(item.value, color.value, year.value, "")
    fbw2.addProduct(product)
    // fbw.getAnimalById("13CziPoNJhinO6mwNnwb")

})
