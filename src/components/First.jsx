import React, { useEffect } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { useProvider } from './context/Provider';


const First = ({ item }) => {

    const navigate = useNavigate();
    const { setMaterials, materials } = useProvider()
    const { title, img, href } = item

    useEffect(() => {
        let item = materials
        item.tipo = ""
        setMaterials({ ...item })
    }, [])

    return (
        <>
            <button 
            className='mt-5'
                onClick={() => {
                let item = materials
                item.tipo = title
                setMaterials({ ...item })
                navigate(href)
            }}>
                <div>
                    <h4 className="uppercase text-white text-left text-2xl">{title}</h4>
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={title}
                        className="w-full mt-3 object-cover h-[200px]"
                        src={img}
                    />
                </div>
            </button>
            
        </>
    )
}

export default First