import React from 'react'
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ExtExt = () => {
    
    const navigate = useNavigate();

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
                        <Radio value="AquarocMax 11 mm">AquarocMax 11 mm</Radio>
                        <Radio value="X-terium 12.7 mm">X-terium 12.7 mm</Radio>
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
                        <Radio value="Sin Aislante">Sin Aislante</Radio>
                        <Radio value="Fibra de Vidrio 2 1/2">Fibra de Vidrio 2 1/2"</Radio>
                    </RadioGroup>


                </div>
                <div className='flex justify-center'>
                    <Button className='my-8' size="lg" color="primary" onPress={() => navigate("/meter?type=extExt")}>
                        Siguiente
                        <FaChevronRight />
                    </Button>
                </div>
            </form>
        </>
    )
}

export default ExtExt