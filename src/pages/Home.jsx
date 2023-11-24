import { Button, Checkbox, Input, Select, SelectItem } from '@nextui-org/react'
import { FaChevronRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();


    return (
        <div className='container mx-auto container-small'>
            <h2 className='text-4xl font-bold'>Bienvenido</h2>
            <h3 className='text-lg'>Para iniciar tu cotización llena el siguiente formulario</h3>
            <form action="">
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-10">
                    <Input className='col-span-1 md:col-span-2' type="text" label="Nombre" placeholder="" />
                    <Select
                        label="Tipo de documento"
                    >
                        <SelectItem value="CC"> CC </SelectItem>
                        <SelectItem value="CC"> TI </SelectItem>
                        <SelectItem value="CC"> Pasaporte </SelectItem>
                    </Select>

                    <Input type="text" label="Número de documento" placeholder="" />

                    <Input type="email" label="Correo electrónico" placeholder="" />

                    <Input type="email" label="Celular de empresa" placeholder="" />

                    <Input type="text" label="Nombre del proyecto" placeholder="" />

                    <Select
                        label="Tipo de proyecto"
                    >
                        <SelectItem value="Salud"> Salud </SelectItem>
                        <SelectItem value="Educación"> Educación </SelectItem>
                        <SelectItem value="Residencial"> Residencial </SelectItem>
                        <SelectItem value="Comercial"> Comercial </SelectItem>
                        <SelectItem value="Cultural"> Cultural </SelectItem>
                        <SelectItem value="Oficinas"> Oficinas </SelectItem>
                        <SelectItem value="Industrial"> Industrial </SelectItem>

                    </Select>

                    <Checkbox >Aceptación de tratamientos de datos</Checkbox>

                </div>
                <Button size="lg" className='my-8' color="primary"  onPress={() => navigate("/type?type=inicio")}>
                    Siguiente
                    <FaChevronRight />
                </Button>
            </form>
        </div>
    )
}

export default Home