import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Context from './../components/context/Provider'
import { router } from '../router/router';

const Breadcrumb = () => {

    const { pathname, search } = useLocation()
    const [breadRout, setBreadRout] = useState([])
    

    const routesArray = {
        "/type?type=inicio": ["Inicio"],

        "/type?type=cielorasos": ["Inicio", "Cielorasos"],
        "/adjust?type=cielorasosCorridos": ["Inicio", "Cielorasos", "Cielorasos corridos"],
        "/adjust?type=cielorasosReticulares": ["Inicio", "Cielorasos", "Cielorasos reticulares"],

        "/type?type=muros": ["Inicio", "Muros"],
        "/adjust?type=intInt": ["Inicio", "Muros", "Interior-Interior"],
        "/adjust?type=muroFachada": ["Inicio", "Muros", "MuroFachada"],

        "/meter?type=cielorasosCorridos": ["Inicio", "Cielorasos", "Cielorasos corridos", "Materiales"],
        "/meter?type=cielorasosReticulares": ["Inicio", "Cielorasos", "Cielorasos reticulares", "Materiales"],
        "/meter?type=intInt": ["Inicio", "Muros", "Interior-Interior", "Materiales"],
        "/meter?type=muroFachada": ["Inicio", "Muros", "MuroFachada", "Materiales"],

    }

    useEffect(() => {
        if (pathname && search) {
            setBreadRout(routesArray[pathname + search]);
        }

    }, [pathname, search])


    return (
        <>
            <Breadcrumbs className='flex justify-start my-5'>
                {
                    breadRout ?
                     breadRout.map((rou, i) => (
                         <BreadcrumbItem key={i}>{rou}</BreadcrumbItem>
                    )) 
                    :
                    null
                }
            </Breadcrumbs>
        </>
    )
}

export default Breadcrumb