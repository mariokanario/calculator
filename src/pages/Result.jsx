import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Card, Button } from "@nextui-org/react";
import { FaFileDownload } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Transition from '../components/Transition';

const Result = () => {

    const rows = [
        {
            key: "1",
            material: "Tornillos Plaka yeso - metal 20 de 1”",
            cantidad: "4,326",
            unidad: "pza",
        },
        {
            key: "2",
            material: "Tornillos Plaka metal- metal 20 de 1/2",
            cantidad: "1,442",
            unidad: "pza",
        },
        {
            key: "3",
            material: "Tornillos Plaka cemento - metal 20 de 1 1/4",
            cantidad: "6,129",
            unidad: "pza",
        },
        {
            key: "4",
            material: "PU Fix Tek bond (280 ml)",
            cantidad: "47",
            unidad: "Cartucho",
        },
        {
            key: "5",
            material: "Tornillos Plaka yeso - metal 20 de 1”",
            cantidad: "4,326",
            unidad: "pza",
        },
        {
            key: "6",
            material: "Tornillos Plaka metal- metal 20 de 1/2",
            cantidad: "1,442",
            unidad: "pza",
        },
        {
            key: "7",
            material: "Tornillos Plaka cemento - metal 20 de 1 1/4",
            cantidad: "6,129",
            unidad: "pza",
        },
        {
            key: "8",
            material: "PU Fix Tek bond (280 ml)",
            cantidad: "47",
            unidad: "Cartucho",
        },
    ];

    const columns = [
        {
            key: "material",
            label: "Material",
        },
        {
            key: "cantidad",
            label: "Cantidad",
        },
        {
            key: "unidad",
            label: "Unidad de venta",
        },
    ];

    return (
        <Transition>
            <div className='container  container-medium relative' style={{ paddingBottom: "8rem" }}>

                <h2 className='text-2xl font-bold'>Resultado </h2>

                <Table className='mt-5'>
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => <TableCell className='text-left'>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <h3 className='text-lg mt-5 font-bold text-left'>Notas</h3>
                <ul className='list-disc text-left text-sm pl-4'>
                    <li>Estas cantidades son aproximadas y no se deben de considerar como definitivas, ya que se deberán de revisar por los responsables de los trabajos.</li>
                    <li>Solo se indican las cantidades a utilizar, más no así el tipo de anclaje.</li>
                    <li>No se consideran refuerzos, esquinas ni huecos para ventanas.</li>
                    <li>En esta explosión de insumos solo se indican las cantidades de perfiles metálicos más no así su dimensión.</li>
                    <li>Producto de pedido especial*.</li>
                    <li>Se considera 3% de desperdicio.</li>
                </ul>

                <Card className='fixed w-4/6  menu-result flex flex-row box-border p-5 justify-center justify-around'>
                    <Button size="lg" className='text-xl' isIconOnly color="primary">
                        <FaFileDownload />
                    </Button>
                    <Button size="lg" className='text-xl' isIconOnly color="primary">
                        <MdAttachEmail />
                    </Button>
                    <Button size="lg" className='text-xl' isIconOnly color="primary">
                        <IoLogoWhatsapp />
                    </Button>
                </Card>
            </div>
        </Transition>
    )
}

export default Result