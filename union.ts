type admin={
    name:string
    id:number
}
type office = {
    oname:string
    oid:number
}
let shahroz : admin | office = {
    name:"shahroz",id:99
}
let seat : "front" | "back" |"last"
seat="front"
//seat="middle" it is not okay because we have defined through union literals
export{};