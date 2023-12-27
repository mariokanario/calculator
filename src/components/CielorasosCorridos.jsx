import React, { useContext, useEffect, useState } from 'react'
import { RadioGroup, Radio, Button, Slider } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from "formik";
import { useProvider } from './context/Provider';

const CielorasosCorridos = () => {

    const {setMaterials, materials} = useProvider()
    
    useEffect(() => {
        setMaterials({ ...materials, values: [] })
    }, [])

    const navigate = useNavigate();

    const [option, setOption] = useState("")
    const [level, setLevel] = useState("")

    const Schema = yup
        .object({
            tipo: yup.string().required("Seleccione una opción"),
            placa: yup.string().required("Seleccione una opción"),
            aislante: yup.string().required("Seleccione una opción"),
            acabado: yup.string().when('tipo', {
                is: (tipo) => tipo == "Exterior",
                then: yup.string().required("Seleccione una opción")
            }),
            desperdicio: yup.string().required("Seleccione una opción"),
        })
        .required();

    const formik = useFormik({
        initialValues: {
            tipo: "",
            placa: "",
            aislante: "",
            acabado: "",
            desperdicio: ""
        },
        validationSchema: Schema,
        onSubmit: () => {
            navigate("/meter?type=cielorasosCorridos")
        },
    });

    const { tipo, placa, aislante, acabado, desperdicio } = formik.values;


    const addElement = (tipo, nombre) => {
        let items = materials.values
        const findElement = items?.findIndex(e => e.tipo == tipo)
        if(findElement == -1 ){
            items.push({ tipo, nombre})
        }else {
            items[findElement] = { tipo, nombre }
        }

        setMaterials({...materials, values: items})
    }

    // console.log(materials);

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 mt-5">
                    <RadioGroup
                        className='mb-8'
                        id="tipo"
                        defaultValue={tipo}
                        onChange={({ target }) => {
                            setOption(target.value)
                            formik.setFieldValue("tipo", target.value)
                            let item = materials
                            item.subtipo = target.value
                            setMaterials({ ...item })
                            
                        }}
                    >
                        <h2 className='title-radio'>Tipo</h2>
                        <Radio value="interior">Interior</Radio>
                        <Radio value="exterior">Exterior</Radio>
                        {formik.touched.tipo && formik.errors.tipo && (
                            <small className="text-danger">{formik.errors.tipo}</small>
                        )}
                    </RadioGroup>


                    <RadioGroup
                        id="placa"
                        defaultValue={placa}
                        onChange={({ target }) => {
                            formik.setFieldValue("placa", target.value)
                            addElement("placa", target.value)
                        }
                        }
                    >
                        <h2 className='title-radio'>Tipo de placa</h2>
                        {
                            option == "interior" &&
                            <>
                                <Radio value="Light 12.7 mm">Light 12.7 mm</Radio>
                                <Radio value="RH 12.7 mm">RH 12.7 mm</Radio>
                                <Radio value="RH 15.9 mm">RH 15.9 mm</Radio>
                                <Radio value="RF 12.7 mm">RF 12.7 mm</Radio>
                                <Radio value="RF 15.9 mm">RF 15.9 mm</Radio>
                                <Radio value="Anti Moho 12.7 mm">Anti Moho 12.7 mm</Radio>
                                <Radio value="Acustik 12 mm">Acustik 12 mm</Radio>
                            </>
                        }
                        {
                            option == "exterior" &&
                            <>
                                <Radio value="AquarocMax 11 mm">AquarocMax 11 mm</Radio>
                                <Radio value="X-terium 12.7 mm">X-terium 12.7 mm</Radio>
                            </>
                        }
                        {formik.touched.placa && formik.errors.placa && (
                            <small className="text-danger">{formik.errors.placa}</small>
                        )}
                    </RadioGroup>



                    <RadioGroup
                        id="desperdicio"
                        defaultValue={desperdicio}
                        onChange={({ target }) => {
                            formik.setFieldValue("desperdicio", target.value)
                            let item = materials
                            item.desperdicio = target.value
                            setMaterials({...item})
                    }}
                    >
                        <h2 className='title-radio'>% de desperdicio</h2>
                        {
                            option != "" &&
                            <>
                                <Radio value="0">0 %</Radio>
                                <Radio value="3">3 %</Radio>
                                <Radio value="5">5 %</Radio>
                                <Radio value="10">10 %</Radio>
                            </>
                        }
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
                        {
                            option != "" &&
                            <>
                                <Radio value="Isover Arena 60 (rollos 12,4 m2)">Isover Arena 60 (rollos 12,4 m2)</Radio>
                                <Radio value="Frescasa Eco 2,5 (rollos de 9 m2)">Frescasa Eco 2,5" (rollos de 9 m2)</Radio>
                                <Radio value="Frescasa Eco 3,5 (rollos de 9 m2)">Frescasa Eco 3,5" (rollos de 9 m2)</Radio>
                                <Radio value="Sin aislante">Sin aislante</Radio>
                            </>
                        }
                        {formik.touched.aislante && formik.errors.aislante && (
                            <small className="text-danger">{formik.errors.aislante}</small>
                        )}
                    </RadioGroup>



                    <RadioGroup
                        id="acabado"
                        defaultValue={acabado}
                        onChange={({ target }) => {
                            formik.setFieldValue("acabado", target.value)
                            addElement("acabado", target.value)

                        }}
                    >
                        {
                            option == "exterior" &&
                            <>
                                <h2 className='title-radio'>Nivel de acabado</h2>
                                <Radio value="Sin Acabado">Sin Acabado</Radio>
                                <Radio value="5 Plaka Finish">5 Plaka Finish</Radio>
                                <Radio value="Masilla Acrilica">Masilla Acrilica</Radio>
                                {/* <Radio value="RD + MIX" onChange={(e) => setLevel(e.target.value)}>RD + MIX</Radio> */}
                                {formik.touched.acabado && formik.errors.acabado && (
                                    <small className="text-danger">{formik.errors.acabado}</small>
                                )}
                            </>
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
                    >
                        Siguiente
                        <FaChevronRight />
                    </Button>


                </div>
            </form>
        </>
    )
}

export default CielorasosCorridos