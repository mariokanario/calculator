import React from 'react'
import { Button, Input, Tabs, Tab, CardBody, Card } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from "formik";
import { useProvider } from './context/Provider';


const MeterForm = () => {

    const navigate = useNavigate();
    const { materials, setMaterials } = useProvider()


    const Schema1 = yup
        .object({
            largo: yup.number().required("Escriba un valor"),
            ancho: yup.number().required("Escriba un valor"),
        })
        .required();

    const Schema2 = yup
        .object({
            metros: yup.number().required("Escriba un valor"),
        })
        .required();

    const formik1 = useFormik({
        initialValues: {
            largo: "",
            ancho: "",
        },
        validationSchema: Schema1,
        onSubmit: async (data) => {
            const meterCua = data.largo * data.ancho
            setMaterials({ ...materials, metrocuadrado: meterCua });
            navigate("/result")
        },
    });

    const formik2 = useFormik({
        initialValues: {
            metros: ""
        },
        validationSchema: Schema2,
        onSubmit: async (data) => {
            setMaterials({ ...materials, metrocuadrado: data.metros });
            navigate("/result")
        },
    });

    const { largo, ancho } = formik1.values;
    const { metros } = formik2.values;


    const meterCua = largo * ancho

    return (
        <>

            <div className="flex w-full flex-col justify-center">
                <Tabs aria-label="Options" color="primary" radius="full" className='justify-center mt-5'>
                    <Tab key="photos" title="Metros lineales">
                        <form className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-3"
                            onSubmit={formik1.handleSubmit}
                        >
                                <Input
                                    type="number"
                                    min={0}
                                    max={1000000}
                                    label="Largo"
                                    placeholder="35 m"
                                    id="largo"
                                    value={largo}
                                    onChange={formik1.handleChange}
                                    errorMessage={formik1.errors.largo}
                                    isInvalid={formik1.errors.largo && formik1.touched.largo}
                                />

                                <Input
                                    type="number"
                                    min={0}
                                    max={1000000}
                                    label="Ancho"
                                    placeholder="10 m"
                                    id="ancho"
                                    value={ancho}
                                    onChange={formik1.handleChange}
                                    errorMessage={formik1.errors.ancho}
                                    isInvalid={formik1.errors.ancho && formik1.touched.ancho}
                                />


                            <h2 className='text-4xl font-bold col-span-1 md:col-span-2 mt-5'>Total: {meterCua} m²</h2>

                            <div className='flex justify-center gap-5 col-span-1 md:col-span-2'>
                                <Button size="lg" className='my-8' color="primary" variant="faded" onPress={() => navigate(-1)}>
                                    <FaChevronLeft />
                                    Anterior
                                </Button>
                                <Button type="submit" size="lg" className='my-8' color="primary">
                                    Calcular
                                    <FaChevronRight />
                                </Button>
                            </div>
                        </form>
                    </Tab>
                    <Tab key="music" title="Metros cuadrados">
                        <form className="flex w-full flex-col justify-center mt-3 place-items-center "
                            onSubmit={formik2.handleSubmit}>
                            <Input
                                className='place-self-center w-full md:w-1/2'
                                min={0}
                                max={1000000}
                                label="Total"
                                placeholder="350 m"
                                type="number"
                                id="metros"
                                value={metros}
                                onChange={formik2.handleChange}
                                errorMessage={formik2.errors.metros}
                                isInvalid={formik2.errors.metros && formik2.touched.metros}
                            />

                            <div className='flex justify-center gap-5 col-span-1 md:col-span-2'>
                                <Button size="lg" className='my-8' color="primary" variant="faded" onPress={() => navigate(-1)}>
                                    <FaChevronLeft />
                                    Anterior
                                </Button>
                                <Button type="submit" size="lg" className='my-8' color="primary">
                                    Calcular
                                    <FaChevronRight />
                                </Button>
                            </div>
                        </form>
                    </Tab>

                </Tabs>
            </div>



        </>
    )
}

export default MeterForm