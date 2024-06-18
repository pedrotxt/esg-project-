import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import './categorias.css'

interface CategoriaProps {
}

const Categorias = (props: CategoriaProps) => {
    return (
        <>
        <SimpleGrid spacing={8} templateColumns='repeat(3, 1fr)'>
            <Card>
                <CardHeader>
                <Heading size='md'>Gestão de Residuos</Heading>
                </CardHeader>
                <CardBody>
                <Text>Implementar programas de reciclagem e compostagem, além de reduzir o uso de materiais descartáveis.                </Text>
                </CardBody>
                <CardFooter>
                <Button>Ir para Categoria</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'>Redução de emissões</Heading>
                </CardHeader>
                <CardBody>
                <Text>Promover o uso de transportes alternativos, como bicicletas e caronas, além de investir em veículos elétricos para a frota da empresa.</Text>
                </CardBody>
                <CardFooter>
                <Button>Ir para Categoria</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'>Uso sustentavel de recursos</Heading>
                </CardHeader>
                <CardBody>
                <Text>Adotar práticas para reduzir o consumo de água e outros recursos naturais, como sistemas de captação de água da chuva e uso de materiais reciclados.</Text>
                </CardBody>
                <CardFooter>
                <Button>Ir para Categoria</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'>Redução do desperdicio de alimentos</Heading>
                </CardHeader>
                <CardBody>
                <Text>Nos refeitórios corporativos, implementar programas para minimizar o desperdício de alimentos, como doação de excedentes e compostagem.</Text>
                </CardBody>
                <CardFooter>
                <Button>Ir para Categoria</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
        </>
    );
}

export default Categorias;