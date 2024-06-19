import '../../index.css'

import {ChakraProvider, Divider} from "@chakra-ui/react";

import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Paragraph from "../../components/Paragraph";

import Logo from '../../assets/Logo.png'
import NavBar from '../../components/NavBar';
import Categorias from '../../components/Categorias';
import Footer from '../../components/Footer';
import ButtonSubmit from '../../components/ButtonSubmit';


const Login = (): JSX.Element => {
    return (
        <>
            <ChakraProvider>   
                <NavBar />
                <div className="box">
                 
                    <div className='pontos-conteudo'>
                        <div className='form-itens'>
                            <Subtitle marcacao={false}>Olá!</Subtitle>
                            <div className="margin"></div>
                            <Title>Você tem 26000 pontos!</Title>
                            <img src={Logo} alt="logo" style={{width: "200px", padding: "20px"}} />
                            <Subtitle marcacao={false}>SALDO DE PONTOS</Subtitle>
                            <Subtitle marcacao={false}>26000</Subtitle>
                            <Paragraph paragrafo={false}>Resgate alguma bonificação com seus pontos!</Paragraph>

                        </div>
                    </div>
                </div>
                <div className="box-bonificacao">
             
                    <div className='bonificacao-conteudo'>
                        <div className='form-itens'>
                            <Title>Parabéns!</Title>
                            <Paragraph paragrafo={false}>Você acumulou 26000 pontos ajudando o meio ambiente!</Paragraph>
                            <div className="margin"></div>
                            <Paragraph paragrafo={false}>Resgate agora premios incriveis com seus pontos</Paragraph>
                        </div>
                        <div className='bonificao-itens-right'>
                            <Paragraph paragrafo={false}>X</Paragraph>
                            <ButtonSubmit submit={true}>RESGATAR AGORA</ButtonSubmit>
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