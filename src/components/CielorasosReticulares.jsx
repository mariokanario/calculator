import React, { useContext, useEffect, useState } from 'react'
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from "formik";
import { useProvider } from './context/Provider';


const CielorasosReticulares = () => {

    const { setMaterials, materials, cielorasoReticular } = useProvider()

    useEffect(() => {
        setMaterials({ ...materials, values: [] })
    }, [])

    const navigate = useNavigate();

    const Schema = yup
        .object({
            placa: yup.string().required("Seleccione una opción"),
            suspencion: yup.string().required("Seleccione una opción"),
            desperdicio: yup.string().required("Seleccione una opción"),
        })
        .required();

    const formik = useFormik({
        initialValues: {
            placa: "",
            suspencion: "",
            desperdicio: ""
        },
        validationSchema: Schema,
        onSubmit: () => {
            navigate("/meter?type=cielorasosReticulares")
        },
    });

    const { placa, suspencion, desperdicio } = formik.values;

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


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-5">

                    <RadioGroup
                        size="lg"
                        className='mb-8'
                        id="placa"
                        defaultValue={placa}
                        onChange={({ target }) => {
                            formik.setFieldValue("placa", target.value)
                            addElement("placa", target.value)
                        }}
                    >
                        <h2 className='title-radio'>Tipo</h2>
                        {
                            Object.keys(cielorasoReticular?.placa)?.map(pla => (
                                <Radio value={pla}>{pla}</Radio>
                            ))
                        }
                        {formik.touched.tipo && formik.errors.tipo && (
                            <small className="text-danger">{formik.errors.tipo}</small>
                        )}
                    </RadioGroup>

                    <RadioGroup
                        size="lg"
                        className='mb-8'
                        id="suspencion"
                        defaultValue={suspencion}
                        onChange={({ target }) => {
                            formik.setFieldValue("suspencion", target.value)
                            addElement("suspencion", target.value)
                        }
                        }
                    >
                        <h2 className='title-radio'>Suspención</h2>
                        {
                            Object.keys(cielorasoReticular?.suspencion)?.map(sus => (
                                <Radio value={sus}>{sus}</Radio>
                            ))
                        }
                       
                        {formik.touched.suspencion && formik.errors.suspencion && (
                            <small className="text-danger">{formik.errors.suspencion}</small>
                        )
                        }
                    </RadioGroup>


                    <RadioGroup
                        size="lg"
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
                    // onPress={() => navigate("/meter?type=cielorasosReticulares")}
                    >
                        Siguiente
                        <FaChevronRight />
                    </Button>
                </div>

            </form>
        </>
    )
}

export default CielorasosReticulares