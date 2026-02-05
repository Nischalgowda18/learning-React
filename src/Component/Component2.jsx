import Component3 from "./Component3";

const Component2 = ({value}) => {
   let [obj,obj1]=value
   
    return (
        <>  
          <Component3 data={{obj,obj1}}/>
           
        </>
    )
}               
export default Component2;