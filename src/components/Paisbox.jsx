import '../styles/paisbox.css'

export  const Paisbox = ({ urlmg,population,rejion,capital,pais })=>{
    return(
        <article className="ComponentPais">
            <figure className="ComponentPais__img">
                <img src={ urlmg } />
            </figure>
            <section className="ComponentPais__info">
                <h2>{ pais }</h2>
                <div className="ComponetPais__info-pais">
                    <p><strong>Population:</strong> {population}</p>
                    <p><strong>Rejion: </strong>{rejion}</p>
                    <p><strong>Capital: </strong>{capital}</p>
                </div>
            </section>
        </article>

    );


}
