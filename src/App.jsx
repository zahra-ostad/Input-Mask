import { useState } from "react";
import Input from "./Input";
import cities from "./cities.json"

function App() {
const [hint,setHint]=useState([])
const [error,setError]=useState("")

const handleChange=(e)=>{
   const value=e.target.value

setError("")

const filteredData=cities.filter((city)=>{
return city.startsWith(value)
 
})

if(filteredData.length > 1 && value === ""){
   setHint([])
   setError("Please enter something !")
}else if(filteredData.length > 1){
   const nameOfCity=filteredData[0]
   setHint(([nameOfCity]))
}else if(filteredData.length === 1){
   const nameOfCity=filteredData[0]
setHint(([nameOfCity]))
}else{
   setHint([])
   setError("There are no cities that match your input!")
}

}


   return (
   <div>
   <Input handleChange={handleChange} hint={hint} error={error}/>
   </div>
   )
}

export default App;
