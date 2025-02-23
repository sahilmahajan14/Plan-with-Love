import { useState } from "react";
import "./App.css";
import data from "./data"
import Tours from "./components/Tours";
import { toast } from "react-hot-toast";

function App() {
console.log(data)
  const [tours ,setTours] = useState(data)

  function removeTour(id){
    const newTours = tours.filter( tour => tour.id !== id)
    setTours(newTours)
    toast.error('Tour Removed');
  }
// reloading the page

function RefreshHandler(){
  setTours(data);
  toast.success('Page Refreshed');
}
 

  if(tours.length === 0){
    return (
      <div className=" w-[100vw] h-[100vh] flex justify-center items-center flex-col">
        <h2 className="text-2xl">No Tours Left</h2>
        <button onClick={RefreshHandler} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>Refresh</button>
      </div>
    )
  }
  return (
   <div className="">
      <Tours tours={tours} removeTour={removeTour}/>
   </div>
  )
}

export default App;
