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
            {/* <Card
                shadow="sm"
                isPressable
                className='col-span-1 mt-5'
                onPressEnd={() => {
                    let item = materials
                    item.tipo = title
                    setMaterials({ ...item })
                    navigate(href)
                }}>
                <CardHeader className="text-small justify-between">
                    <h4 className="font-bold text-large uppercase text-white">{title}</h4>
                </CardHeader>

                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        height={500}
                        alt={title}
                        className="w-full object-cover h-[140px]"
                        src={img}
                    />
                </CardBody>
            </Card> */}
        </>
    )
}

export default First