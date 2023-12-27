import React, { useEffect } from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
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
            <Card shadow="sm" isPressable onPressEnd={() =>{
                let item = materials
                item.tipo =  title
                setMaterials({ ...item })
                navigate(href)
            } }>
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={title}
                        className="w-full object-cover h-[140px]"
                        src={img}
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b>{title}</b>
                </CardFooter>
            </Card>
        </>
    )
}

export default First