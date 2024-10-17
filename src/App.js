
import './App.css';
import {useState, usestate} from 'react';

function App() {

  let[city,setcity]=useState("")
  let[wdetail,setwdetail]=useState()
  let[isloading,setisloading]=useState(false)
let getData=(event)=>{
setisloading(true)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d3094747f6b6aabb175ba09509d633f&units=metric`)

.then((res)=>res.json())
.then((final)=>{
if(final.cod=="404"){
  setwdetail(undefined)
}else{
  setwdetail(final)
}
setisloading(false)

})
event.preventDefault()
  setcity("")

}
  return (
    <div className="w-[100%] h-[100vh] bg-[#4aacd1]">
      <div className='max-w-[1320px]mx-auto'>
        <h1 className='text-[40px] font-bold py-[50px] text-white '> Simple Whether app</h1>

    <form onSubmit={getData}>
<input type="text" value={city} onChange={(e)=>setcity(e.target.value)} className='w-[300px] h-[40px] pl-3' placeholder='City Name' /><button className='bg-[#1d4a6b] text-white font-bold p-[10px_20px]'>Submit</button>

</form>
<div className='w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px]'>

<img src='https://cdn.dribbble.com/users/93245/screenshots/3231739/loader.gif ' width={100} className={`absolute left-[45%] ${isloading?'':'hidden'}`}/>
{wdetail!==undefined
?

<>
<h3 className='font-bold text-[30px]'>{wdetail.name}  <span className='bg-[yellow]'>{wdetail.sys.country}</span> </h3>
<h2 className='font-bold text-[40px]'>{wdetail.main.temp}</h2>
<img src={`http://openweathermap.org/img/w/${wdetail.weather[0].icon}.png`}/>
<p>{wdetail.weather[0].description}</p>
</>
:
"city not found"}



</div>
    </div>
    <div/>
    </div>
  );
}

export default App;
