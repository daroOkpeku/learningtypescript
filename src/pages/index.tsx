import Image from "next/image";
import { Inter } from "next/font/google";
import { Interface } from "readline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // in typescript if a variable is asigned to a number you can not change it to
  // string
   let num = 45;

  //  in typesript if a variable is empty and add a rule for only num or string nothing else 
  //  can be assign to it
  let word:string
  word = "stephen"

  let count:number
  count = 2

  let boo :boolean
  boo = true

  // you can only allow string or number on specfic variable 
  let only_string_or_number: string|number;
  only_string_or_number = "hello"
  only_string_or_number = 2



  // in typescript if array with string can not accept a number same thing with an array of numbers

  let arr =["stephen", "john", "mark", "luke"]
  arr.push("paul")


  let arr_num = [1, 2, 3, 4, 5, 6]
  arr_num.push(10)

  // this is for array type for string which accept only string
  let arr_list : string[]
  arr_list = ["one", "two", "three", "four", "five"]

// this is for array type for number which accept only number
  let arr_number:number[]
  arr_number = [1, 3, 5, 6, 7, 8]


  // this is type accept only string or number
  let arr_string_num:(string|number) []
  arr_string_num = [1, 3, "one", "turiuri"] 


// if you create an object like this in typescipt
// language already knows that the key in the object can be changed
// for instance username cant be change to a number it only accept string
  let userdata = {
    username:"stephen",
    age:45,
    isAdmin:true
  }

  userdata.username = "Okpeku"
  userdata.age = 40


  // this is for object types to set each keys what of variable there are accepting
  let userObj :{
    user:string,
    num:number,
    istrue:boolean
  }

  userObj = {
   user:"joker",
   num:23,
   istrue:true
  }


//  this is used ? when the key is not required for here phone is not required and error will not 
// occcur when i do not enter phone
  let userObjOne :{
    user:string,
    num:number,
    istrue:boolean,
    phone?:string
  }


  userObjOne = {
    user:"jackson",
    num:23,
    istrue:false
  }
  userObjOne.phone = "08165648269"



  // any type accept any thing such as boolean, string, number, 

  let checks:any;
  checks = 1;
  checks = true;
  checks = [];
  checks = "string"



  // you can also add types to function

  const calNum = ():number =>{
    // you must return the variable which must be a number
   let a = 1 + 3
   return a
  }



  const userInfo = ():string=>{
    let word = "hello my name is stephen"
    return word
  }


  // void  is used when you do not want to return any thing in the 
  // function
  const anothercal = ():void=>{
  console.log("hello")
  }



  const Muitlpy = (one:number, two:number, three?:number):number=>{
    // the parameter accept only number and three parameter is not required because of ?
   let f = one + two
   return f
  }

  Muitlpy(3, 7)

   // Type Alise
  //  this will allow you set rules of Objects and Variable Which can be reuseable in the application

  type userInfoData ={
   firsname:string,
   lastname:string,
   phonenumber:string,
   age:number,
   hobble?:string
  }

  let xoxo ={
    firsname:"",
    lastname:"",
    phonenumber:"",
    age:0,
    hobble:""
  }
  const getUserInfo = (xoxo:userInfoData):any=>{
     xoxo.firsname = "stephen"
     xoxo.lastname = "okpeku"
     xoxo.phonenumber = "08165648269"
     xoxo.age =20
     return xoxo
  }
 console.log(getUserInfo(xoxo));



//  type Alise can be created for function just like object
type func = (a:number, b:string)=>void

let checkfun: func = (numcx, wordxc)=>{
  console.log(numcx + wordxc)
}

checkfun(1, "stephen")


// options in type alise 

type userDataOne = {
  firsname:string,
  lastname:string,
  phonenumber:string,
  age:number,
  hobble:"Football"|"Weight Lifing"
}


let objCheck : userDataOne ={
 firsname:'hello',
 lastname:"fkjfkjf",
 phonenumber:"urierirur9948",
 age:20 ,
 hobble:"Weight Lifing"
}

// interface is like type but can be extended
interface IUser{
 username:string,
 password:string,
 userid:number
}


interface IEmployer extends IUser {
employerid:string
}

let jack : IEmployer = {
  employerid: "",
  username: "",
  password: "",
  userid: 0,
}
const playingaround = (jack:IEmployer)=>{
  jack.employerid = "uyruyt7843"
  jack.username = "sam"
  jack.password = "2tuy3874yg43"
  jack.userid = 26763
  return jack
}

playingaround(jack)


// GENERIC
// this is used to extend inface without limiting the use of the interface to specific interface


interface IUserDateOther<T>{
  username:string,
  email:string,
  id:number,
  other:T[] //it enable you to use it with other interface it just like relationship11
}


interface ICategories {
   booktype:string,
   authorid:number,
}

interface IWriter {
  writer:string,
  year_of_birth:string
}

const datashow : IUserDateOther <ICategories> ={
  username:"Brue",
  email:"brue@gmail.com",
  id:1,  
  other:[{booktype:"IT", authorid:3}]
}


const datashowone :IUserDateOther<IWriter>={
  username:"Brue",
  email:"brue@gmail.com",
  id:1,  
  other:[{writer:"Stephen King", year_of_birth:"12/12/12"}]
}
  return (
    <div>

    </div>
  );
}
