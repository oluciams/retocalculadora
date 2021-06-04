const d= document
const key1= d.getElementById("one").getAttribute("value")
const key2= d.getElementById("two").getAttribute("value")
const result= d.getElementById("result")
const container=d.querySelector("#container")
const regex= /^\d+$/
//const valor = num1.getAttribute("value")
//console.log(key1)


function add(n1,n2){ 
    let resultado = (Number(n1)) + (Number(n2))
    result.textContent= resultado
    console.log(resultado)
}

container.addEventListener("click", operacion)

function operacion(event){
    const n1regex= regex.test(key1)
    const n2regex= regex.test(key2) 
   
    if(event.target.matches(".element num")){         
        console.log("entre1")
        let number1 = key1
        
        console.log(number1)

    }

    if(event.target.matches(".add")){ 
        //console.log(num1)
        console.log("entre")
        if(n1regex && n2regex){            
            add(num1,num2)
        } else{
            console.log (resultado)
        }
    }
}