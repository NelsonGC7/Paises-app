import { Paisbox } from "./components/Paisbox.jsx";
import { useState,useEffect } from "react";
import './styles/App.css';
import moon from '../public/svgs/moon.svg'
import search from '../public/svgs/search.svg'
const App = ()=>{
    const [listotal,setListotal] = useState([]);
    const [active,setActive] =useState(false);
    const [input,setInput]= useState("");
    
    
    useEffect(()=>{
        const url = "https://restcountries.com/v3.1/all"

        fetch(url)
            .then(res => res.json())
                .then(data => {  
                    setListotal(data)  
                })

        
    },[])

   
   function enCambios (e){
    setInput(e.target.value);
   }
   function sendDel(e){
    e.preventDefault()
    const newValue = input.trim()
    if(newValue.length !== 0){
        fetch(`https://restcountries.com/v3.1/name/${newValue}`)
        .then(res=> res.json()).then(datos => setListotal(datos))
    

    }
    

   }
   

return(
    <>
    <header className="Header">
        <h3>Where in the world?</h3>
        <figure>
            <img src={moon} alt="" />
            <p>Dark mode</p>
        </figure>

    </header>
    <form className="formulario" onSubmit={sendDel} >
        <input type="text" onChange={enCambios}  placeholder="Search for a region..."  />
        <img src={search} />
    </form>

    <section className="ComponentPaises">
    {
        listotal.map(
        pais=>{
            return(
                <Paisbox
                key={pais.name.common}
                pais={pais.name.common}
                urlmg={pais.flags.png}
                population={pais.population}
                rejion={pais.region}
                capital={pais.capital}
            
            />


            )

        }
        )
    }

    </section>
    </>


)
}

export default App;