import facebook from './icones/facebook.png'
import twitter from './icones/twitter.png'
import instagram from './icones/instagram.png'
import styled from 'styled-components'

const FooterEstilizado = styled.footer`
    background-color: #04244F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px;
    box-sizing: border-box;
    margin-top: 100px;
    width: 100%;
`

const UlEstilizada = styled.ul`
    display: flex;
    justify-content: flex-start;
    gap: 67px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`

const LiEstilizada = styled.li`
   img {
        text-decoration: none;
    }
    
`

const ParagrafoEstilizado = styled.p`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    color: white;
    margin: 0;

`

const Footer = () => {

    return(
        <FooterEstilizado>
            <UlEstilizada>
                <LiEstilizada><img src={facebook} alt="Ícone do Facebook" /></LiEstilizada>
                <LiEstilizada><img src={twitter} alt="Ícone do Twitter" /></LiEstilizada>
                <LiEstilizada><img src={instagram} alt="Ícone do Instagram" /></LiEstilizada>
            </UlEstilizada>
            <ParagrafoEstilizado>Desenvolvido pela Isabely.</ParagrafoEstilizado>
        </FooterEstilizado>
 )
}
export default Footer