import React, { useEffect, useState } from 'react'
import { RadioGroup, Radio, Button, Slider } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from "formik";
import { useProvider } from './context/Provider';


const IntInt = () => {

    const navigate = useNavigate();
    const { setMaterials, materials, muroInterior } = useProvider()
    const [level, setLevel] = useState("")

    useEffect(() => {
        setMaterials({ ...materials, values: [] })
    }, [])

    const Schema = yup
        .object({
            cara1: yup.string().required("Seleccione una opción"),
            cara2: yup.string().required("Seleccione una opción"),
            aislante: yup.string().required("Seleccione una opción"),
            acabado: yup.string().required("Seleccione una opción"),
            desperdicio: yup.string().required("Seleccione una opción"),
        })
        .required();

    const formik = useFormik({
        initialValues: {
            cara1: "",
            cara2: "",
            aislante: "",
            acabado: "",
            desperdicio: ""
        },
        validationSchema: Schema,
        onSubmit: () => {
            navigate("/meter?type=intInt")
        },
    });

    const { cara1, cara2, aislante, acabado, desperdicio } = formik.values;

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
                        id="cara1"
                        defaultValue={cara1}
                        onChange={({ target }) => {
                            formik.setFieldValue("cara1", target.value)
                            addElement("cara1", target.value)
                        }}
                    >
                        <h2 className='title-radio'>Cara 1</h2>
                        {
                            Object.keys(muroInterior?.cara1)?.map(cara => (
                                <Radio value={cara}>{cara}</Radio>
                            ))
                        }
                       
                        {formik.touched.cara1 && formik.errors.cara1 && (
                            <small className="text-danger">{formik.errors.cara1}</small>
                        )}
                    </RadioGroup>

                    <RadioGroup
                        size="lg"
                        id="cara2"
                        defaultValue={cara2}
                        onChange={({ target }) => {
                            formik.setFieldValue("cara2", target.value)
                            addElement("cara2", target.value)
                        }}
                    >
                        <h2 className='title-radio'>Cara 2</h2>
                        {
                            Object.keys(muroInterior?.cara2)?.map(cara => (
                                <Radio value={cara}>{cara}</Radio>
                            ))
                        }
                        {formik.touched.cara2 && formik.errors.cara2 && (
                            <small className="text-danger">{formik.errors.cara2}</small>
                        )}
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

                    <RadioGroup
                        size="lg"
                        id="aislante"
                        defaultValue={aislante}
                        onChange={({ target }) => {
                            formik.setFieldValue("aislante", target.value)
                            addElement("aislante", target.value)
                        }}
                    >
                        <h2 className='title-radio'>Aislante</h2>
                        {
                            Object.keys(muroInterior?.aislante)?.map(ais => (
                                <Radio value={ais}>{ais}</Radio>
                            ))
                        }
                        {formik.touched.aislante && formik.errors.aislante && (
                            <small className="text-danger">{formik.errors.aislante}</small>
                        )}
                    </RadioGroup>

                    <RadioGroup
                        size="lg"
                        id="acabado"
                        defaultValue={acabado}
                        onChange={({ target }) => {
                            formik.setFieldValue("acabado", target.value)
                            addElement("acabado", target.value)
                        }}
                    >
                        <h2 className='title-radio'>Nivel de acabado</h2>
                        {
                            Object.keys(muroInterior?.acabado)?.map(aca => (
                                <Radio value={aca}>{aca}</Radio>
                            ))
                        }
                        {
                            level == "RD + MIX" &&
                            <Slider
                                color="primary"
                                size="md"
                                label=" "
                                minValue={0}
                                maxValue={5}
                                showSteps={true}
                                marks={[
                                    { value: 0, label: "0", },
                                    { value: 1, label: "1", },
                                    { value: 2, label: "2", },
                                    { value: 3, label: "3", },
                                    { value: 4, label: "4", },
                                    { value: 5, label: "5", },

                                ]}
                                className="max-w-md"
                            />
                        }
                        {formik.touched.acabado && formik.errors.acabado && (
                            <small className="text-danger">{formik.errors.acabado}</small>
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
                    // onPress={() => navigate("/meter?type=intInt")}
                    >
                        Siguiente
                        <FaChevronRight />
                    </Button>
                </div>
            </form>
        </>
    )
}

export default IntInt