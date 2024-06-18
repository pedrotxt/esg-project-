import './pontuacao.css'

interface PontuacaoProps {
    children: React.ReactNode,
}

const Pontuacao = ({ children }: PontuacaoProps): JSX.Element => {
    return (
        <>
            <div className='box-pontuacao'>
                <p className='pontuacao'>{children} pts</p>
            </div>
        </>
    );
}

export default Pontuacao;