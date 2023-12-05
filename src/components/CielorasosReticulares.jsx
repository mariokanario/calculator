import React from 'react'
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const CielorasosReticulares = () => {

    const navigate = useNavigate();

    return (
        <>
            <form>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-5">

                    <RadioGroup className='mb-8'>
                        <h2 className='title-radio'>Tipo</h2>
                        <Radio value="Sky Clean 60,3 cm x 60,3 cm">Sky Clean 60,3 cm x 60,3 cm</Radio>
                        <Radio value="Urban 60,3 cm x 60,3 cm">Urban 60,3 cm x 60,3 cm</Radio>
                        <Radio value="Duracustic 1,22m x 0,61 m">Duracustic 1,22m x 0,61 m</Radio>
                        <Radio value="Clouds 1 1,22 m X 2,40 m">Clouds 1" 1,22 m X 2,40 m</Radio>
                        <Radio value="Black Theater 1 1,22 m X 2,40 m">Black Theater 1" 1,22 m X 2,40 m</Radio>
                        <Radio value="Clouds 2 1,22 m X 2,40 m">Clouds 2" 1,22 m X 2,40 m</Radio>
                        <Radio value="Black Theater 2 1,22 m X 2,40 m">Black Theater 2" 1,22 m X 2,40 m</Radio>
                    </RadioGroup>


                    <RadioGroup>
                        <h2 className='title-radio'>% de desperdicio</h2>
                        <Radio value="0">0 %</Radio>
                        <Radio value="3">3 %</Radio>
                        <Radio value="5">5 %</Radio>
                        <Radio value="10">10 %</Radio>
                    </RadioGroup>

                </div>
                <div className='flex justify-center gap-5'>
                    <Button size="lg" className='my-8' color="primary" variant="faded" onPress={() => navigate(-1)}>
                        <FaChevronLeft />
                        Anterior
                    </Button>
                    <Button className='my-8' size="lg" color="primary" onPress={() => navigate("/meter?type=cielorasosReticulares")}>
                        Siguiente
                        <FaChevronRight />
                    </Button>
                </div>

            </form>
        </>
    )
}

export default CielorasosReticulares