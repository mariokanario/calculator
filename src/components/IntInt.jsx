import React, { useState } from 'react'
import { RadioGroup, Radio, Button, Slider } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const IntInt = () => {
    
    const navigate = useNavigate();

    const [level, setLevel] = useState("")


    return (
        <>
            <form>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-5">

                    <RadioGroup>
                        <h2 className='title-radio'>Cara 1</h2>
                        <Radio value="Light 12.7 mm">Light 12.7 mm</Radio>
                        <Radio value="RH 12.7 mm">RH 12.7 mm</Radio>
                        <Radio value="RH 15.9 mm">RH 15.9 mm</Radio>
                        <Radio value="RF 12.7 mm">RF 12.7 mm</Radio>
                        <Radio value="RF 15.9 mm">RF 15.9 mm</Radio>
                        <Radio value="Anti Moho 12.7 mm">Anti Moho 12.7 mm</Radio>
                        <Radio value="Acustik 12 mm">Acustik 12 mm</Radio>
                    </RadioGroup>

                    <RadioGroup>
                        <h2 className='title-radio'>Cara 2</h2>
                        <Radio value="Light 12.7 mm">Light 12.7 mm</Radio>
                        <Radio value="RH 12.7 mm">RH 12.7 mm</Radio>
                        <Radio value="RH 15.9 mm">RH 15.9 mm</Radio>
                        <Radio value="RF 12.7 mm">RF 12.7 mm</Radio>
                        <Radio value="RF 15.9 mm">RF 15.9 mm</Radio>
                        <Radio value="Anti Moho 12.7 mm">Anti Moho 12.7 mm</Radio>
                        <Radio value="Acustik 12 mm">Acustik 12 mm</Radio>
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
                        <Radio value="Frescasa Eco 2,5">Frescasa Eco 2,5"</Radio>
                        <Radio value="Frescasa Eco 3,5">Frescasa Eco 3,5"</Radio>
                        <Radio value="Isover Arena">Isover Arena</Radio>
                        <Radio value="Acustifibra">Acustifibra</Radio>
                        <Radio value="Acustic Control VP">Acustic Control VP</Radio>
                        <Radio value="Black Theater 1">Black Theater 1"</Radio>
                        <Radio value="Black Theater 2">Black Theater 2"</Radio>
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
                    <Button className='my-8' size="lg" color="primary" onPress={() => navigate("/meter?type=intInt")}>
                        Siguiente
                        <FaChevronRight />
                    </Button>
                </div>
            </form>
        </>
    )
}

export default IntInt