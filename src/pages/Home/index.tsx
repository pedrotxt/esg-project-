import '../../index.css'

import {ChakraProvider, Divider} from "@chakra-ui/react";

import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Paragraph from "../../components/Paragraph";

import Logo from '../../assets/Logo.png'
import NavBar from '../../components/NavBar';
import Pontuacao from '../../components/Pontuacao';
import Categorias from '../../components/Categorias';
import Footer from '../../components/Footer';


const Login = (): JSX.Element => {
    return (
        <>
            <ChakraProvider>   
                <NavBar />
                <div className="box">
                    <div className='left-background'></div>
                    <div className='form-box'>
                        <div className='form-itens'>
                            <img src={Logo} alt="logo" style={{width: "200px"}} />
                            <Subtitle marcacao={false}>Confira a sua pontuação ao lado</Subtitle>
                            <div className="margin"></div>
                            <Paragraph paragrafo={false}>Use sua pontuação para ganhar Bonificações!</Paragraph>
                        </div>
                        <div className='form-itens-right'>
                            <Title>Pontuação</Title>
                            <Pontuacao>150</Pontuacao>
                        </div>
                    </div>
                </div>
                <Divider orientation='horizontal' />
                <div className='categoria-box'>
                    <Title>Categorias</Title>
                    <Categorias />
                </div>
                <footer>
                    <Footer />
                </footer>
            </ChakraProvider>
        </>
    )
}

export default Login;