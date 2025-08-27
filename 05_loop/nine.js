const myNum=[1,2,3]

const newTotal=myNum.reduce( function(acc,curr){
    console.log(`acc:${acc} and current value ${curr}`)
    return acc+curr
},0)


const myTotal=myNum.reduce( (acc,curr)=>acc+curr,0)
console.log(myTotal)



const shoppingCard=[
    {itemName:"js course",
     price:999
    },
    {itemName:"app dev",
     price:90
    },
    {itemName:"css",
     price:799
    },
    {itemName:"ML",
     price:9999
    }
]

const total=shoppingCard.reduce( (acc,item)=>acc+item.price,0)

console.log(total)