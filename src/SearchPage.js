import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from "./ChannelRow.js"
import VideoRow from "./VideoRow.js"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="//yt3.ggpht.com/ytc/AAUvwnjs-zLpaw4w-2Q3QsDaAhy--8ZcHR9u16XZGa52ig=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Antroporama"
                verified
                subs="698,000"
                noOfVideos={51}
                description="Hola! Soy Patri Tezanos, doctoranda en Neurociencia. Y esto es Antroporama"
            />
            <hr/>
            <VideoRow
                views="272,997" 
                subs="698,000"
                description="Existe el libre albedrío? Los resultados del experimento de Libet dicen que no existe, al menos de la forma en que lo concebimos"
                timestamp="3 years ago"
                channel="Antroporama"
                title="EL EXPERIMENTO DE LIBET | El experimento que dice que no existe el libre albedrío"
                image="https://i.ytimg.com/vi/wESoyC5Y9lU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLA1c5IYYzRMk-mBVHgK59_PA3CcJg"
            />
            <VideoRow
                views="256,848" 
                subs="698,000"
                description="Por qué a unos les gustan las mujeres y a otros los hombres, seamos del sexo que seamos? Desde la Neurociencia y la..."
                timestamp="3 years ago"
                channel="Antroporama"
                title="¿POR QUÉ ME GUSTAN LAS MUJERES, POR QUÉ ME GUSTAN LOS HOMBRES? | Hormonas y orientación sexual"
                image="https://i.ytimg.com/vi/SzfdUzQG7qw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6HmyvNo1AkzoCY_dJ2INTnAF6_g"
            />
            <VideoRow
                views="146.571" 
                subs="698,000"
                description="La evolución humana es un tema harto interesante, ¡pero hablar mal de ella es muy fácil! Aquí recopilo los 5 ERRORES que oigo..."
                timestamp="3 years ago"
                channel="Antroporama"
                title="5 ERRORES COMUNES al hablar de EVOLUCIÓN HUMANA"
                image="https://i.ytimg.com/vi/e6am_ASbkZg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLrVfs66618pHEo0Wat45cgGIeAQ"
            />
            <VideoRow
                views="589,008" 
                subs="698,000"
                description="El debate que abrieron @QuantumFracture y @smdani sobre la calidad de ciertas pruebas sobre la existencia de Dios me..."
                timestamp="3 years ago"
                channel="Antroporama"
                title="RE: RE: &quot;DIOS EXISTE&quot; | Sobre la lógica humana"
                image="https://i.ytimg.com/vi/dKyLy06u-Ug/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfGiuSvdEyyPF6NphsFd3uuiT3zg"
            />
            <VideoRow
                views="121,891" 
                subs="698,000"
                description="Por qué necesitamos echarnos todas las noches a dormir? Exploramos las funciones del sueño y el caso de Randy Gardner..."
                timestamp="3 years ago"
                channel="Antroporama"
                title="¿POR QUÉ DORMIMOS? Funciones del sueño y el caso de Randy Gardner."
                image="https://i.ytimg.com/vi/1_5hRP7PlkE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJIt2G2llcKeIS0PaPoO4O8uHukA"
            />
            <VideoRow
                views="40,249" 
                subs="698,000"
                description="Se puede llevar a cabo un trasplante de cabeza? ¿Sabías que ya se han hecho algunos? ¿Estamos ya preparados para hacerlos..."
                timestamp="3 years ago"
                channel="Antroporama"
                title="EL TRASPLANTE DE CABEZA HUMANA | De los perros de dos cabezas a la polémica actual"
                image="https://i.ytimg.com/vi/mi3nJKU88Ho/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB63LpKDFlnraxPYJ0-0CwEbRKeRQ"
            />


        </div>
    )
}

export default SearchPage
