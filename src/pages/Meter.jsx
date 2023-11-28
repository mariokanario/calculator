import React from 'react'
import MeterForm from '../components/MeterForm'
import Breadcrumb from '../components/Breadcrumb'
import Transition from '../components/Transition'

const Meter = () => {
    return (
        <Transition>
            <div className='container  container-medium'>

                <h2 className='text-2xl font-bold'>Paso 3: <span className='font-normal'>Define las medidas</span></h2>
                <Breadcrumb />

                <MeterForm />

            </div>
        </Transition>
    )
}

export default Meter