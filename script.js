

let products =[]

const func = () => {
    const API= "https://dummyjson.com/products"
 fetch(API)
 .then(res=>res.json())
 .then(data=>{
    products=data.products;
    func2(data.products);
 })
.catch(err=>console.log(err))    

}
    
func()

function func2(prds){
const mydata =[...prds]

console.log(mydata.filter(e=>e.price>=80).length)
}


