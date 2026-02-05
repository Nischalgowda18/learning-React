import Component5 from "./Component5";

const Component4 = ({value}) => {
   let [obj,obj1]=value
   
    return (
        <>  
          <Component5 data={{obj,obj1}}/>
           
        </>
    )
}               
export default Component4;