import React from 'react'
import CielorasosCorridos from '../components/CielorasosCorridos';
import { useLocation } from 'react-router-dom';
import CielorasosReticulares from '../components/CielorasosReticulares';
// import MuroLambrin from '../components/MuroLambrin';
import IntInt from '../components/IntInt';
import MuroFachada from '../components/MuroFachada';
import ExtExt from '../components/_ExtExt';
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
                    type == "cielorasosCorridos" ?
                        <CielorasosCorridos />
                        : type == "cielorasosReticulares" ?
                            <CielorasosReticulares />
                            : type == "intInt" ?
                                <IntInt />
                                : type == "muroFachada" ?
                                    <MuroFachada />
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