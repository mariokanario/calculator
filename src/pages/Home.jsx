import { Button, Checkbox, Input, Select, SelectItem } from '@nextui-org/react'
import { FaChevronRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from "formik";
import { useProvider } from '../components/context/Provider';
import { useState } from 'react';

const Home = () => {

    const navigate = useNavigate();

    const { setUserData } = useProvider()

    const [agree, setAgree] = useState(false)

    const Schema = yup
        .object({
            name: yup
                .string()
                .required("El nombre es obligatorio")
                .min(5, "El nombre debe tener mínimo 5 letras"),
            typeDocument: yup
                .string()
                .required("Elige un tipo de documento"),
            document: yup
                .string()
                .required("El documento es obligatorio")
                .min(6, "El documento debe mínimo 6 letras"),
            email: yup
                .string()
                .required("El correo es obligatorio")
                .min(5, "El correo debe de tener mínimo 5 letras")
                .email("Ingresa un correo válido"),
            cellphone: yup
                .string()
                .required("El teléfono es obligatorio")
                .min(5, "El teléfono debe de tener mínimo 5 letras")
                .typeError("El teléfono es obligatorio"),
            nameProject: yup
                .string(),
            typeProject: yup
                .string()
                .required("Elige un tipo de proyecto"),
        })
        .required();


    const formik = useFormik({
        initialValues: {
            name: "",
            typeDocument: "",
            document: "",
            email: "",
            cellphone: "",
            nameProject: "",
            typeProject: ""
        },
        validationSchema: Schema,
        onSubmit: (data) => {
            setUserData(data);
            navigate("/type?type=inicio")
        },
    });

    const { name, typeDocument, document, email, cellphone, nameProject, typeProject } = formik.values;

    return (
        <div className='container mx-auto container-small'>
            <img className='mb-10 mx-auto' src="./img/logo.svg" alt="" style={{ width: "150px" }} />
            <h2 className='text-4xl font-bold text'>Bienvenido a la calculadora de construcción en seco</h2>
            <h3 className='text-lg text'>para iniciar tu cotización llena el siguiente formulario</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-6">


                    <Input
                        className='col-span-1 md:col-span-2'
                        type="text"
                        label="Nombre"
                        placeholder=""
                        id="name"
                        value={name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        errorMessage={formik.errors.name}
                        isInvalid={formik.errors.name && formik.touched.name}
                    />

                    <Select
                        label="Tipo de documento"
                        id="typeDocument"
                        name="typeDocument"
                        value={typeDocument}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        errorMessage={formik.errors.typeDocument}
                        isInvalid={formik.errors.typeDocument && formik.touched.typeDocument}
                    >
                        <SelectItem key="CC" value="CC"> CC </SelectItem>
                        <SelectItem key="CE" value="CE"> CE </SelectItem>
                        <SelectItem key="Pasaporte" value="Pasaporte"> Pasaporte </SelectItem>
                        <SelectItem key="NIT" value="NIT"> NIT </SelectItem>
                    </Select>

                    <Input
                        type="text"
                        label="Número de documento"
                        placeholder=""
                        id="document"
                        value={document}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        errorMessage={formik.errors.document}
                        isInvalid={formik.errors.document && formik.touched.document}
                    />

                    <Input
                        type="email"
                        label="Correo electrónico"
                        placeholder=""
                        id="email"
                        value={email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        errorMessage={formik.errors.email}
                        isInvalid={formik.errors.email && formik.touched.email}
                    />

                    <Input
                        type="cellphone"
                        label="Celular"
                        placeholder=""
                        id="cellphone"
                        value={cellphone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        errorMessage={formik.errors.cellphone}
                        isInvalid={formik.errors.cellphone && formik.touched.cellphone}
                    />

                    <Select
                        label="Tipo de proyecto"
                        id="typeProject"
                        name="typeProject"
                        value={typeProject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        errorMessage={formik.errors.typeProject}
                        isInvalid={formik.errors.typeProject && formik.touched.typeProject}
                    >
                        <SelectItem key="Salud" value="Salud"> Salud </SelectItem>
                        <SelectItem key="Educación" value="Educación"> Educación </SelectItem>
                        <SelectItem key="Residencial" value="Residencial"> Residencial </SelectItem>
                        <SelectItem key="Comercial" value="Comercial"> Comercial </SelectItem>
                        <SelectItem key="Cultural" value="Cultural"> Cultural </SelectItem>
                        <SelectItem key="Oficinas" value="Oficinas"> Oficinas </SelectItem>
                        <SelectItem key="Industrial" value="Industrial"> Industrial </SelectItem>
                    </Select>

                    <Input
                        type="text"
                        label="Nombre del proyecto"
                        placeholder=""
                        id='nameProject'
                        value={nameProject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        errorMessage={formik.errors.nameProject}
                        isInvalid={formik.errors.nameProject && formik.touched.nameProject}
                    />


                    <Checkbox className='col-span-1 md:col-span-2 text-center flex' onChange={() => setAgree(!agree)} >
                        Aceptación de <a className='underline decoration-1' href='https://www.isover.com.co/sites/mac3.isover.com.co/files/2023-07/s15_pol_029_rh_politica_y_procedimiento_proteccion_datos_personales.pdf' target='_blanck'>
                             tratamientos de datos
                        </a>
                    </Checkbox>

                </div>
                <Button

                    isDisabled={agree == false && true}
                    type='submit'
                    size="lg"
                    className='my-8'
                    color="primary"
                >
                    Siguiente
                    <FaChevronRight />
                </Button>
            </form>
        </div>
    )
}

export default Home