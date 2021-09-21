const testEs1 = () => {

    console.log("Test")

    const x = 10
    const y = 20

    for (let i = 0; i < x; i++) {

        for (let i = 0; i < x; i++) {


            console.log("Test ciclo inn")


        }

    }

    const arr = [3, 5, 7, 2, 12, 1, 0, 13]
    const item = 12
    const exec = arr.length
    let min = 0

    arr.forEach(item => {
        if (item < min) {
            min = item
        }
    })


    const contains = (arr, item) => {
        for (let i = 0; i < arr.length; i++) {
            console.log("Eseguo")
            if (arr[i] === item) {
                return true
            }
        }
        return false
    }

    const orderedContains = (arr, item) => {
        const array = [1, 3, 24, 27, 30, 42, 62, 128, 256]

        [128, 256]

    }


    contains(arr, item)

}


const es2Lin = (x) => {
    //Algoritmo
    for (let i = 0; i < x; i++) {
        const a = 1
    }
}



const es2Quad = (x) => {
    //Algoritmo
    for (let i = 0; i < x; i++) {
        for (let i = 0; i < x; i++) {
            const a = 1
        }
    }
}

const es2Esp = (x) => {
    //2^x
    const finish = Math.pow(2, x)
    //Algoritmo
    for (let i = 0; i < finish; i++) {
        for (let i = 0; i < x; i++) {
            const a = 1
        }
    }
}

const debugEnabled = false  

const withTime = (func, x) => {
    if(debugEnabled){
        const start = new Date()
        func(x)
        const end = new Date()
    
        console.log("Tempo di esecuzione  => ", end.getTime() - start.getTime())
    }else{
        func(x)
    }
}



const x = 300000
console.log("Finish => ", Math.pow(2, x))
es2Lin(x)
es2Quad(x)
///es2Esp(x)

withTime(es2Lin, x)