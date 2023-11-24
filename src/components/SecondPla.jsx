import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";


const SecondPla = () => {

    const list = [
        {
            title: "Plafones corridos",
            img: "/img/plafones.png",
        },
        {
            title: "Plafones reticulares",
            img: "/img/plafones.png",
        },

    ];

    return (
        <>
            <h2>Selecciona qué quieres construir</h2>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-5">
                {list.map((item, index) => (
                    <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                src={item.img}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.title}</b>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default SecondPla