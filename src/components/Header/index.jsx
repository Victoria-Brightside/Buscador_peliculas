import "./Header.css"

export function Header({search, error, updateSearch, onSearch}) {

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch({ search })
    }

    const handleChange = (event) => {
        const newSearch = event.target.value
        updateSearch(newSearch)
    }

    const handleClear = () => {
        updateSearch('');
    }

    return (
        <header>
            <h1>Buscador de películas</h1>
            <p> Escribe la pelicula que deseas buscar usando palabras en inglés</p>
            <form className='form' onSubmit={handleSubmit}>
                <input type="search" onChange={handleChange} value={search} name='query' placeholder='"Spider-man", "Avengers"' />
                <button type="submit"> Buscar </button>
                <button type="clear" onClick={handleClear}> Limpiar</button>
            </form>
            {error && <p style={{ color: 'red' }}> {error} </p>}
        </header>
    )
}

