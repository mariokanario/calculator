import React, { useState } from 'react'
import { RadioGroup, Radio, Button, Slider } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const CielorasosCorridos = () => {

    const navigate = useNavigate();

    const [option, setOption] = useState("")
    const [level, setLevel] = useState("")

    return (
        <>
            <form>
                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 mt-5">
                    <RadioGroup className='mb-8'>
                        <h2 className='title-radio'>Tipo</h2>
                        <Radio value="interior" onChange={(e) => setOption(e.target.value)}>Interior</Radio>
                        <Radio value="exterior" onChange={(e) => setOption(e.target.value)}>Exterior</Radio>
                    </RadioGroup>


                    <RadioGroup>
                        <h2 className='title-radio'>Tipo de placa</h2>
                        {
                            option == "interior" &&
                            <>
                                <Radio value="Frescasa Eco 2,5">Frescasa Eco 2,5"</Radio>
                                <Radio value="Frescasa Eco 3,5">Frescasa Eco 3,5"</Radio>
                                <Radio value="Isover Arena">Isover Arena</Radio>
                            </>
                        }
                        {
                            option == "exterior" &&
                            <>
                                <Radio value="Isover Arena">Isover Arena</Radio>
                                <Radio value="Frescasa con Foil 3,5">Frescasa con Foil 3,5"</Radio>
                                <Radio value="Frescasa con Foil 2,5">Frescasa con Foil 2,5"</Radio>
                            </>
                        }
                    </RadioGroup>



                    <RadioGroup>
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
                    </RadioGroup>



                    <RadioGroup>
                        <h2 className='title-radio'>Aislante</h2>
                        {
                            option != "" &&
                            <>
                                <Radio value="Sin Aislante">Sin Aislante</Radio>
                                <Radio value="Fibra de Vidrio 2 1/2">Fibra de Vidrio 2 1/2"</Radio>
                            </>
                        }
                    </RadioGroup>



                    <RadioGroup>
                        {
                            option == "interior" &&
                            <>
                                <h2 className='title-radio'>Nivel de acabado</h2>
                                <Radio value="5 Plaka Finish" onChange={() => setLevel("")}>5 Plaka Finish</Radio>
                                <Radio value="RD + MIX" onChange={(e) => setLevel(e.target.value)}>RD + MIX</Radio>
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
                    <Button size="lg" className='my-8' color="primary" onPress={() => navigate("/meter?type=cielorasosCorridos")}>
                        Siguiente
                        <FaChevronRight />
                    </Button>
                </div>
            </form>
        </>
    )
}

export default CielorasosCorridos