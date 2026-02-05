
import Component4 from "./Component4";
const Component3= ({value}) => {
   let [obj,obj1]=value
   
    return (
        <>  
          <Component4 data={{obj,obj1}}/>
           
        </>
    )
}               
export default Component3;