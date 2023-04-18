
    const items=["banana","orange","pineaple","mango","rasberry","kiwi","cherry","berries","strawberry","plums"];
    const quantity=[20,100,34,78,90,45,90,98,78,65,70];
    const totalItems=Object.fromEntries(items.map((a,b)=>[a,quantity[b]]))
    console.log(totalItems)


function additem(totalItems){
totalItems.watermellon=20
return totalItems
// quantity.push(40)
// console.log(items);
}
console.log(additem(totalItems))

function update(totalItems){
totalItems.watermellon=80
return totalItems
}
console.log(update(totalItems))

function calculate() { 
    const calculate=Object.values(totalItems);
    const sum =calculate.reduce((accumulator,calculates)=>{
        return accumulator+calculates;

    },0) 
    console.log(sum) 

}
calculate()
function finditem() {
    
}
