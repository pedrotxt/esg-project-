import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import './footer.css'

interface CategoriaProps {
}

const Footer = (props: CategoriaProps) => {
    return (
        <>
        <div className='footer'>
            Olá
        <SimpleGrid spacing={8} templateColumns='repeat(3, 1fr)'>
            
        </SimpleGrid>
        </div>
        </>
    );
}

export default Footer;