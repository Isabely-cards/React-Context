import styled from "styled-components"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

function BarraLateral () {
    return (
    
        <aside>
            <nav>
                <ListaEstilizada>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}
 export default BarraLateral