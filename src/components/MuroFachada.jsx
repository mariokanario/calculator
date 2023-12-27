import React, { useEffect, useState } from 'react'
import { RadioGroup, Radio, Button, Slider } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from "formik";
import { useProvider } from './context/Provider';


const MuroFachada = () => {

    const navigate = useNavigate();
    const { setMaterials, materials } = useProvider()
    
    useEffect(() => {
        setMaterials({ ...materials, values: [] })
    }, [])

    const Schema = yup
        .object({
            cara1: yup.string().required("Seleccione una opción"),
            cara2: yup.string().required("Seleccione una opción"),
            aislante: yup.string().required("Seleccione una opción"),
            desperdicio: yup.string().required("Seleccione una opción"),
        })
        .required();

    const formik = useFormik({
        initialValues: {
            cara1: "",
            cara2: "",
            aislante: "",
            desperdicio: ""
        },
        validationSchema: Schema,
        onSubmit: () => {
            navigate("/meter?type=muroFachada")
        },
    });

    const { cara1, cara2, aislante, desperdicio } = formik.values;

    const addElement = (tipo, nombre) => {
        let items = materials.values
        const findElement = items?.findIndex(e => e.tipo == tipo)
        if (findElement == -1) {
            items.push({ tipo, nombre })
        } else {
            items[findElement] = { tipo, nombre }
        }

        setMaterials({ ...materials, values: items })
    }

    console.log(materials);

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-5">


                    <RadioGroup
                        id="cara1"
                        defaultValue={cara1}
                        onChange={({ target }) => {
                            formik.setFieldValue("cara1", target.value)
                            addElement("cara1", target.value)
                        }}
                    >
                        <h2 className='title-radio'>Cara 1</h2>
                        <Radio value="AquarocMax 11 mm">AquarocMax 11 mm</Radio>
                        <Radio value="X-terium 12.7 mm">X-terium 12.7 mm</Radio>
                        {formik.touched.cara1 && formik.errors.cara1 && (
                            <small className="text-danger">{formik.errors.cara1}</small>
                        )}
                    </RadioGroup>

                    <RadioGroup
                        id="cara2"
                        defaultValue={cara2}
                        onChange={({ target }) => {
                            formik.setFieldValue("cara2", target.value)
                            addElement("cara2", target.value)
                        }}
                        >
                        <h2 className='title-radio'>Cara 2</h2>
                        <Radio value="AquarocMax 11 mm">AquarocMax 11 mm</Radio>
                        <Radio value="X-terium 12.7 mm">X-terium 12.7 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 6 mm">Placa de Fibrocemento de 6 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 8 mm">Placa de Fibrocemento de 8 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 10 mm">Placa de Fibrocemento de 10 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 14 mm">Placa de Fibrocemento de 14 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 17 mm">Placa de Fibrocemento de 17 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 20 mm">Placa de Fibrocemento de 20 mm</Radio>
                        {formik.touched.cara2 && formik.errors.cara2 && (
                            <small className="text-danger">{formik.errors.cara2}</small>
                        )}
                    </RadioGroup>


                    <RadioGroup
                        id="desperdicio"
                        defaultValue={desperdicio}
                        onChange={({ target }) => {
                            formik.setFieldValue("desperdicio", target.value)
                            let item = materials
                            item.desperdicio = target.value
                            setMaterials({ ...item })
                        }}
                    >
                        <h2 className='title-radio'>% de desperdicio</h2>
                        <Radio value="0">0 %</Radio>
                        <Radio value="3">3 %</Radio>
                        <Radio value="5">5 %</Radio>
                        <Radio value="10">10 %</Radio>
                        {formik.touched.desperdicio && formik.errors.desperdicio && (
                            <small className="text-danger">{formik.errors.desperdicio}</small>
                        )}
                    </RadioGroup>

                    <RadioGroup
                        id="aislante"
                        defaultValue={aislante}
                        onChange={({ target }) => {
                            formik.setFieldValue("aislante", target.value)
                            addElement("aislante", target.value)
                        }}
                        >
                        <h2 className='title-radio'>Aislante</h2>
                        <Radio value="Isover Arena 60 (rollos 12,4 m2)">Isover Arena 60 (rollos 12,4 m2)</Radio>
                        <Radio value="Ecovent 80 (laminas 0,81m2)">Ecovent 80 (laminas 0,81m2) </Radio>
                        {formik.touched.aislante && formik.errors.aislante && (
                            <small className="text-danger">{formik.errors.aislante}</small>
                        )}
                    </RadioGroup>


                </div>
                <div className='flex justify-center gap-5'>
                    <Button size="lg" className='my-8' color="primary" variant="faded" onPress={() => navigate(-1)}>
                        <FaChevronLeft />
                        Anterior
                    </Button>
                    <Button
                        className='my-8'
                        size="lg"
                        color="primary"
                        type="submit"
                        // onPress={() => navigate("/meter?type=muroFachada")}
                    >
                        Siguiente
                        <FaChevronRight />
                    </Button>
                </div>
            </form>
        </>
    )
}

export default MuroFachada