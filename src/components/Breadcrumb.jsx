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

        "/type?type=plafones": ["Inicio", "Plafones"],
        "/adjust?type=plafonesCorridos": ["Inicio", "Plafones", "Plafones corridos"],
        "/adjust?type=plafonesReticulares": ["Inicio", "Plafones", "Plafones reticulares"],

        "/type?type=muros": ["Inicio", "Muros"],
        "/adjust?type=intInt": ["Inicio", "Muros", "Interior-Exterior"],
        "/adjust?type=extInt": ["Inicio", "Muros", "Exterior-Interior"],
        "/adjust?type=extExt": ["Inicio", "Muros", "Exterior-Exterior"],

        "/meter?type=plafonesCorridos": ["Inicio", "Plafones", "Plafones corridos", "Materiales"],
        "/meter?type=plafonesReticulares": ["Inicio", "Plafones", "Plafones reticulares", "Materiales"],
        "/meter?type=intInt": ["Inicio", "Muros", "Interior-Exterior", "Materiales"],
        "/meter?type=extInt": ["Inicio", "Muros", "Exterior-Interior", "Materiales"],
        "/meter?type=extExt": ["Inicio", "Muros", "Exterior-Exterior", "Materiales"],

    }

    useEffect(() => {
        if (pathname && search) {
            setBreadRout(routesArray[pathname + search]);
        }

    }, [pathname, search])


    return (
        <>
            <Breadcrumbs variant='solid' className='flex justify-center my-5'>
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