import React from 'react'
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const PlafonesReticulares = () => {

    const navigate = useNavigate();

    return (
        <>
            <form>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-5">

                    <RadioGroup className='mb-8'>
                        <h2 className='title-radio'>Tipo</h2>
                        <Radio value="61 x 61">61 x 61</Radio>
                        <Radio value="61 x 122">61 x 122</Radio>
                    </RadioGroup>


                    <RadioGroup>
                        <h2 className='title-radio'>% de desperdicio</h2>
                        <Radio value="0">0 %</Radio>
                        <Radio value="3">3 %</Radio>
                        <Radio value="5">5 %</Radio>
                        <Radio value="10">10 %</Radio>
                    </RadioGroup>

                </div>
                <div className='flex justify-center'>
                    <Button className='my-8' size="lg" color="primary" onPress={() => navigate("/meter?type=plafonesReticulares")}>
                        Siguiente
                        <FaChevronRight />
                    </Button>
                </div>

            </form>
        </>
    )
}

export default PlafonesReticulares