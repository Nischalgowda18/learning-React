
let Props9=({data})=>{
    return(
        <div>
        <h2>{data.a}</h2>
        <h2>{data.arr.join(",")}</h2>
        <h1>{data.obj.name}</h1>
        <h1>{data.obj.age}</h1>
        </div>

    )
} 
export default Props9;