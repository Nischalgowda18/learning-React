

const Component5 = ({value}) => {
   let [obj,obj1]=value
   
    return (
        <div>  
         <h1>{obj1.name}</h1>
           {
            obj.skills.map((i)=>{
                return(
                    <>
                    <h1>{i}</h1>
                    </>
                )
            }
        )
           }
        </div>
    )
}               
export default Component5;