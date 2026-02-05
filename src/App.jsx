// let App=()=>{
//     return(
//         <div id="one">
//             <a href="">HOME</a>
//             <a href="">ABO
// UT</a>
//             <a href="">SERVICES</a>
//             <a href="">CONTACT</a>
//         </div>
//     )
// }
// let App = () => {
//     let a = 10;
//     let b = 20;
//     let c = {
//         name: "ReactJS",
//         skils:["HTML","CSS","JS"],

// import { Component } from "react"
// import NavbarContainer from "./Navbar/NavbarContainer";
import { useContext } from "react";
import Form from "./Formdetails/Form";
import Component1 from "./Component/Component1";
import Condition1 from "./Conditional Rendering/Condition1";
import Condition2 from "./Conditional Rendering/Condition2";
import Condition3 from "./Conditional Rendering/Condition3";
import Form1 from "./UserStateForm/Form1";
import { Toaster } from "react-hot-toast";
import UseEffect1 from "./UseEffect/UseEffect1";
import Form2 from "./Form2";
import Getdetails from "./Formdetails/Getdetails";
import Context from "./ContextAPI/Context";
import C1 from "./ContextAPI/C1";
import C2 from "./ContextAPI/C2";

let App = () => {
    return (
        <div>
        {/* <Condition1/> */}
        {/* <Condition2/> */}
        {/* <Condition3/> */}
        {/* <Toaster />
        <Form1/>  */}
        {/* <Navbar/> */}
        {/* <UseEffect1/> */}
        {/* <Toaster/>
        <Form/>
         <Getdetails/> */}
        {/* <Form2/> */}

        <Context>
            <C1/>
            <C2/>
        </Context>
        
        </div>
       
    
  );
}
export default App
