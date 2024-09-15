import { Paisbox } from "./components/Paisbox.jsx";
import { Paiscomplete } from "./components/Paiscomplete.jsx";
import { useState,useEffect } from "react";
import './styles/app.css';
const App = ()=>{
    const [listotal,setListotal] = useState([]);
    const [vista,setVista] = useState(false);
    const [paistotal,setPaistotal] = useState([])
    const [input,setInput]= useState("");
    const [all,setAll] =useState(0)
    const listaPaises = [...listotal]
    
    
    useEffect(()=>{
        const url = "https://restcountries.com/v3.1/all"

        fetch(url)
            .then(res => res.json())
                .then(data => {  
                    setListotal(data)  
                })

        
    },[all]);

   
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
   function Back(){
    setVista(false)
   }
   async function filterRegion(e){
    const region = e.target.value
    if(region === "" ) return;
    if (region === "All"){
        return setAll(all + 1)
    };
    const url = `https://restcountries.com/v3.1/region/${region}`;
   const res = await fetch(url)
   const data = await res.json()
   const dataFilter =  data.filter(pais => pais.region === region)
   setListotal(dataFilter)

   }
  
   

return(
    <>
    <header className="Header">
        <h3>Where in the world?</h3>
        <figure>
            <img src="/svgs/moon.svg" alt="" />
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
                    back={Back}
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
        <img src="/svgs/search.svg" />
        </form>
            <div className="select">
                <h4>Filter by Region</h4>
                <select onChange={filterRegion}>
                    <option value="All">All</option>
                    <option  value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        
    <section className="ComponentPaises">
    {
        listaPaises.map(
            pais=>{
                return(
                    <Paisbox

                    click={()=>{clikComponent(pais.name.common)}}
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