import Egg from "./Egg"


function Hen({name})
{
  return(
    <div>
        <h1>
            hen
        </h1>
        <Egg name={name}/>
    </div>
  )
}
export default Hen