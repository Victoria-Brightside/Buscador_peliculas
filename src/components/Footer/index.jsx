import "./Footer.css"

export function Footer() {

    const actualYear = new Date().getFullYear();
    return (
        <div className= "footer">

            <p>&copy; <span id="year">{actualYear}</span> [Hecho en CDMX por Victoria Bernal]. Todos los derechos
                reservados.</p>
            
        </div>
    )
}