import React, { useState } from 'react'
import { RadioGroup, Radio, Button, Slider } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const MuroFachada = () => {

    const navigate = useNavigate();

    const [level, setLevel] = useState("")


    return (
        <>
            <form>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-5">


                    <RadioGroup>
                        <h2 className='title-radio'>Cara 1</h2>
                        <Radio value="AquarocMax 11 mm">AquarocMax 11 mm</Radio>
                        <Radio value="X-terium 12.7 mm">X-terium 12.7 mm</Radio>
                    </RadioGroup>

                    <RadioGroup>
                        <h2 className='title-radio'>Cara 2</h2>
                        <Radio value="Placa de Fibrocemento de 4 mm">Placa de Fibrocemento de 4 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 6 mm">Placa de Fibrocemento de 6 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 8 mm">Placa de Fibrocemento de 8 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 10 mm">Placa de Fibrocemento de 10 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 14 mm">Placa de Fibrocemento de 14 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 17 mm">Placa de Fibrocemento de 17 mm</Radio>
                        <Radio value="Placa de Fibrocemento de 20 mm">Placa de Fibrocemento de 20 mm</Radio>
                    </RadioGroup>


                    <RadioGroup>
                        <h2 className='title-radio'>% de desperdicio</h2>
                        <Radio value="0">0 %</Radio>
                        <Radio value="3">3 %</Radio>
                        <Radio value="5">5 %</Radio>
                        <Radio value="10">10 %</Radio>
                    </RadioGroup>

                    <RadioGroup>
                        <h2 className='title-radio'>Aislante</h2>
                        <Radio value="Isover Arena">Isover Arena</Radio>
                        <Radio value="Ecovent ">Ecovent </Radio>
                    </RadioGroup>

                    <RadioGroup>
                        <h2 className='title-radio'>Nivel de acabado</h2>
                        <Radio value="5 Plaka Finish" onChange={() => setLevel("")}>5 Plaka Finish</Radio>
                        <Radio value="RD + MIX" onChange={(e) => setLevel(e.target.value)}>RD + MIX</Radio>
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
                    <Button className='my-8' size="lg" color="primary" onPress={() => navigate("/meter?type=muroFachada")}>
                        Siguiente
                        <FaChevronRight />
                    </Button>
                </div>
            </form>
        </>
    )
}

export default MuroFachada