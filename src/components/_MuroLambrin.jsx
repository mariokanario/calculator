import React from 'react'
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const MuroLambrin = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <form>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-5">
                    <RadioGroup
                        label="Tipo"
                    >
                        <Radio value="interior">Interior</Radio>
                        <Radio value="exterior">Exterior</Radio>
                    </RadioGroup>

                    <RadioGroup
                        label="Tipo de placa"
                    >
                        <Radio value="Light 12.7 mm">Light 12.7 mm</Radio>
                        <Radio value="RH 12.7 mm">RH 12.7 mm</Radio>
                        <Radio value="RH 15.9 mm">RH 15.9 mm</Radio>
                        <Radio value="RF 12.7 mm">RF 12.7 mm</Radio>
                        <Radio value="RF 15.9 mm">RF 15.9 mm</Radio>
                        <Radio value="Anti Moho 12.7 mm">Anti Moho 12.7 mm</Radio>
                        <Radio value="Acustik 12 mm">Acustik 12 mm</Radio>
                    </RadioGroup>

                    <RadioGroup
                        label="Tipo de plaka"
                    >
                        <Radio value="AquarocMax 11 mm">AquarocMax 11 mm</Radio>
                        <Radio value="X-terium 12.7 mm">X-terium 12.7 mm</Radio>
                    </RadioGroup>

                    <RadioGroup
                        label="% de desperdicio"
                    >
                        <Radio value="0">0 %</Radio>
                        <Radio value="3">3 %</Radio>
                        <Radio value="5">5 %</Radio>
                        <Radio value="10">10 %</Radio>
                    </RadioGroup>

                    <RadioGroup
                        label="Aislante"
                    >
                        <Radio value="Sin Aislante">Sin Aislante</Radio>
                        <Radio value="Fibra de Vidrio 2 1/2">Fibra de Vidrio 2 1/2"</Radio>
                    </RadioGroup>

                    <RadioGroup
                        label="Nivel de acabado"
                    >
                        <Radio value="5 Plaka Finish">5 Plaka Finish</Radio>
                        <Radio value="RD + MIX">RD + MIX</Radio>
                    </RadioGroup>

                </div>
                <div className='flex justify-end'>
                    <Button size="lg" color="primary" onPress={() => navigate("/meter")}>
                        Siguiente
                        <FaChevronRight />
                    </Button>
                </div>
            </form>
        </>
    )
}

export default MuroLambrin