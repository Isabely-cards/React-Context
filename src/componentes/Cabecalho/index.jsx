import styled from "styled-components"
import logo from '../../../public/imagens/logo.png'
const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

function Cabecalho () {
    return (<HeaderEstilizado>
        <img src={logo} alt="Logo do Space app" />
    </HeaderEstilizado>
    )
}
 export default Cabecalho