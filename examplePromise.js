
//Simple promise returning mocked user data
const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Alf" })
        }, 3000)
    })
}

//Calling getUserInfo on one line
const getUserInfo = id => axios.get("api/user", { id }).then(res => res.data)

//Calling getUserInfo with simple promise
const geUserInfo = id => {
    return new Promise((resolve, reject) => {
        axios.get("api/user", { id })
            .then(res => {
                resolve(res.data)
            })
    })
}



const printUserValue = res => console.log(res)
//Exec line 28
getUserInfo()
    .then(printUserValue)
    .catch(err => {
        console.log(err)
    })

//Exec line 35
const x = 10

