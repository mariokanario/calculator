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
import { Card } from '@nextui-org/react';

const Adjust = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");

    return (
        <main className="grid grid-cols-1 md:grid-cols-5 min-h-screen">

            <section className='bg-left col-span-1 md:col-span-2 p-4 flex items-center justify-end'>
                <article className='title-cont text-left pr-8'>
                    <h2 className=' text-1xl md:text-4xl font-bold uppercase'>Paso 2:</h2>
                    <h2 className=' text-1xl md:text-4xl font-normal uppercase'>Selecciona los <br /> materiales</h2>
                    <Breadcrumb />
                </article>
            </section>

            <section className="bg-right col-span-1 md:col-span-3 p-4  flex flex-col justify-center">

                <div className="cont-logo pb-0">
                    <img className='pb-0 mx-auto' src="./img/logo.svg" alt="" style={{ width: "150px" }} />
                </div>
                <Transition>
                    <Card className='card-cont p-10 ms-5'>

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
                    </Card>
                </Transition>
            </section>
        </main>
    )
}

export default Adjust