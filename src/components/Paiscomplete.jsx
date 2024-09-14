import btonBack from '../assets/back.svg'

export const Paiscomplete = ({ urlImg,namePais,nameN,population,region,subregion,capital,domain,current,lengua,border1,border2,border3,back})=>{
    return(
        <section className="infoCompleta">
            <button onClick={back}> <img src={btonBack} alt="" />Back</button>
            <article className='infoCompleta__info'>
                <figure className='infoCompleta__info-IMG'>
                    <img src={urlImg} alt="" />
                </figure>
                <div className='infoCompleta__info-INFO'>
                    <h3>{namePais}</h3>

                    <div className='infoCompleta__info-INFO-box'>
                        <div className=' infoCompleta__info-box1'>
                            <p><strong>Native name:</strong> {nameN}</p>
                            <p><strong>Population:</strong> {population}</p>
                            <p><strong>Region:</strong> {region}</p>
                            <p><strong>Sub region:</strong> {subregion}</p>
                            <p><strong>Capital: </strong> {capital}</p>
                        </div>
                        <div className=' infoCompleta__info-box2'>
                            <p><strong>Top Level Domain:</strong>{domain}</p>
                            <p><strong>Currencies: </strong>{current}</p>
                            <p><strong>Languages: </strong>{lengua}</p>

                        </div>
                    </div>
                    <div className='infoCompleta__info-border'>
                        <h3>Border Countries:</h3>
                        <div>
                        <p>{border1}</p>
                        <p>{border2}</p>
                        <p>{border3}</p>
                        </div>

                    </div>


                </div>


            </article>


        </section>        


    )

  
}