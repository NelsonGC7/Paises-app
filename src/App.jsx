import { Paisbox } from "./components/Paisbox.jsx";
import { Paiscomplete } from "./components/Paiscomplete.jsx";
import { useState,useEffect } from "react";
import './styles/App.css';
import moon from '../public/svgs/moon.svg'
import search from '../public/svgs/search.svg'
const App = ()=>{
    const [listotal,setListotal] = useState([]);
    const [vista,setVista] = useState(false);
    const [paistotal,setPaistotal] = useState([])
    const [input,setInput]= useState("");
    
    
    useEffect(()=>{
        const url = "https://restcountries.com/v3.1/all"

        fetch(url)
            .then(res => res.json())
                .then(data => {  
                    setListotal(data)  
                })

        
    },[]);

   
   function enCambios (e){
    setInput(e.target.value);
   };
   function sendDel(e){
    e.preventDefault()
    const newValue = input.trim()
    if(newValue.length !== 0){
        fetch(`https://restcountries.com/v3.1/name/${newValue}`)
        .then(res=> res.json())
            .then(datos => setListotal(datos))
            .catch(e=> console.log("errorSearch",e))
    }
   };
   async function clikComponent(newPais){
    const res = await fetch(`https://restcountries.com/v3.1/name/${newPais}`);
    const data = await res.json();
    if(data){
        setPaistotal(data);
        setVista(true);
        console.log(data);
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
    { vista ? 
    (
        <>
        {
            paistotal.map(
            (pais)=>{
                return(
                <>
                    <Paiscomplete
                    key={pais.name.official}
                    urlImg={pais.flags.svg}
                    namePais={pais.name.common}
                    nameN={pais.name.official}
                    population={pais.population}
                    region={pais.region}
                    capital={pais.capital}
                    current={pais.currencies[Object.keys(pais.currencies)[0]].name}
                    subregion={pais.subregion}
                    domain={pais.tld[0]}
                    topLevelDomain={pais.tld}
                    lengua={pais.languages[Object.keys(pais.languages)[0]]}
                    border1={pais.translations[Object.keys(pais.translations)[0]].common}
                    border2={pais.translations[Object.keys(pais.translations)[1]].common}
                    border3={pais.translations[Object.keys(pais.translations)[2]].common}
                />
                </>
                )



            })
        }
        
        </>
    ):
    (
    <>
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
                    click={()=>{
                        console.log(pais.name.common)
                        clikComponent(pais.name.common)
                    }}
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
    </>


)};

export default App;