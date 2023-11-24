import React from 'react'
import { Button, Input, Tabs, Tab, CardBody, Card } from "@nextui-org/react";
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MeterForm = () => {

    const navigate = useNavigate();

    return (
        <>

            <div className="flex w-full flex-col justify-center">
                <Tabs aria-label="Options" color="primary" radius="full" className='justify-center mt-5'>
                    <Tab key="photos" title="Metros lineales">
                        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-3">
                            <Input type="text" label="Largo" placeholder="35 m" />

                            <Input type="text" label="Ancho" placeholder="10 m" />

                            <h2 className='text-4xl font-bold col-span-1 md:col-span-2 mt-5'>Total: 350 m²</h2>
                        </div>
                    </Tab>
                    <Tab key="music" title="Metros cuadrados">
                        <div className="flex w-full flex-col justify-center mt-3 place-items-center ">
                            <Input className='place-self-center w-full md:w-1/2' type="text" label="Total" placeholder="350 m" />
                        </div>
                    </Tab>
                    
                </Tabs>
            </div>  

            <Button size="lg" className='my-8' color="primary" onPress={() => navigate("/result")}>
                Calcular
                <FaChevronRight />
            </Button>

        </>
    )
}

export default MeterForm