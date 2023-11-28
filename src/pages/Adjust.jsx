import React from 'react'
import PlafonesCorridos from '../components/PlafonesCorridos';
import { useLocation } from 'react-router-dom';
import PlafonesReticulares from '../components/PlafonesReticulares';
// import MuroLambrin from '../components/MuroLambrin';
import IntInt from '../components/IntInt';
import ExtInt from '../components/ExtInt';
import ExtExt from '../components/ExtExt';
import Breadcrumb from '../components/Breadcrumb';
import Transition from '../components/Transition';

const Adjust = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");

    return (
        <Transition>
            <div className='container container-medium'>
                <h2 className='text-2xl font-bold'>Paso 2: <span className='font-normal'>Selecciona los materiales</span></h2>
                <Breadcrumb />


                {
                    type == "plafonesCorridos" ?
                        <PlafonesCorridos />
                        : type == "plafonesReticulares" ?
                            <PlafonesReticulares />
                            : type == "intInt" ?
                                <IntInt />
                                : type == "extInt" ?
                                    <ExtInt />
                                    : type == "extExt" ?
                                        <ExtExt />
                                        :
                                        "otros"

                }

            </div>
        </Transition>

    )
}

export default Adjust