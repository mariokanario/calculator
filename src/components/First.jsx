import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

const First = ({ item }) => {

    const navigate = useNavigate();

    const { title, img, href } = item

    return (
        <>
            <Card shadow="sm" isPressable onPress={() => navigate(href)}>
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