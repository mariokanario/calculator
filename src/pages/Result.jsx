import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Card,
  Button,
  CardBody,
  Tooltip,
  Input,
} from "@nextui-org/react";
import { FaFileDownload } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Transition from "../components/Transition";
import { useProvider } from "./../components/context/Provider";
import datosCielorasoCorridoInt from "./../../json/cielorasoCorridoInt.json";
import datosCielorasoCorridoExt from "./../../json/cielorasoCorridoExt.json";
import datosCielorasoReticular from "./../../json/cielorasoReticular.json";
import datosMuroInterior from "./../../json/muroInterior.json";
import datosMuroExterior from "./../../json/muroExterior.json";
import { useNavigate } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Result = () => {
  const navigate = useNavigate();

  const { materials, userData } = useProvider();

  const [price, setPrice] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  const [valPrices, setValPrices] = useState({});

  const manejarCambio = (nombre, valor) => {
    setValPrices((prevValores) => ({
      ...prevValores,
      [nombre]: Number(valor),
    }));
  };

  console.log(valPrices);

  useEffect(() => {
    if (!valPrices) return
    let tempTotalPrice = Object.values(valPrices).reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    setTotalPrice(tempTotalPrice)

  }, [valPrices])

  const data = () => {
    if (
      materials.tipo == "Cieloraso Corrido" &&
      materials.subtipo == "interior"
    )
      return datosCielorasoCorridoInt;

    if (
      materials.tipo == "Cieloraso Corrido" &&
      materials.subtipo == "exterior"
    )
      return datosCielorasoCorridoExt;

    if (materials.tipo == "Cieloraso Reticular") return datosCielorasoReticular;

    if (materials.tipo == "Muro Interior - Interior") return datosMuroInterior;

    if (materials.tipo == "Muro Facahada") return datosMuroExterior;
  };

  const datosJson = data();

  /* PRINT */

  const downloadPDF = () => {
    const capture = document.querySelector("#print")
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('/img/png')
      const doc = new jsPDF('p', 'mm', 'a4')
      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
      doc.save('cotizacion.pdf')
    })
  }



  return (
    <main class="grid grid-cols-1 md:grid-cols-5 min-h-screen">

      <section className='bg-left col-span-1 md:col-span-1 p-4 flex items-center justify-end'>

      </section>
      <section className="bg-right col-span-1 md:col-span-4 p-4  flex flex-col justify-center">

        <div className="flex justify-between" style={{ maxWidth: "900px" }}>
          <div className="cont-logo pb-0">
            <img className='pb-0 mx-auto' src="./img/logo.svg" alt="" style={{ width: "150px" }} />
          </div>

          <Card className="menu-result flex flex-row box-border p-5 justify-around gap-5 rounded-none rounded-t-lg mr-5">
            <Tooltip content="Descargar" color="primary">
              <Button size="lg" className='text-xl' isIconOnly color="primary"
                onClick={downloadPDF}>
                <FaFileDownload />
              </Button>
            </Tooltip>
            <Tooltip content="Enviar a email" color="primary">
              <Button size="lg" className="text-xl" isIconOnly color="primary">
                <MdAttachEmail />
              </Button>
            </Tooltip>
            <Tooltip content="Contactar" color="primary">
              <Button size="lg" className="text-xl" isIconOnly color="primary">
                <a href="https://wa.me/573185480907/?text=Hola%20acabo%20de%20realizar%20una%20cotización%20desde%20la%20web"
                  target="_blank">
                  <IoLogoWhatsapp />
                </a>

              </Button>
            </Tooltip>
          </Card>
        </div>



        <Transition>
          <Card className='card-result p-10 ms-5'>
            <div
              className="container  container-medium relative"
            >
              <div id='print'>
                <h2 className="text-2xl font-bold">Cotización </h2>

                <div className="result-info mt-5" style={{ width: "100%" }}>
                  <Card className="col-span-1 md:col-span-3 ">
                    <CardBody className="gap-4 p-10 grid grid-cols-2 md:grid-cols-3">
                      <img
                        className="mb-10 mx-auto col-span-2 md:col-span-3"
                        src="./img/logo.svg"
                        alt=""
                        style={{ width: "180px" }}
                      />

                      <div className='col-span-2 md:col-span-1'>
                        <h4 className="font-semibold">Cliente: </h4>
                        <p>{userData.name}</p>
                      </div>
                      <div className='col-span-2 md:col-span-1'>
                        <h4 className="font-semibold">Documento: </h4>
                        <p>{userData.typeDocument + " " + userData.document}</p>
                      </div>
                      <div className='col-span-2 md:col-span-1'>
                        <h4 className="font-semibold">Email: </h4>
                        <p>{userData.email}</p>
                      </div>
                      <div className='col-span-2 md:col-span-1'>
                        <h4 className="font-semibold">Celular: </h4>
                        <p>{userData.cellphone}</p>
                      </div>
                      <div className='col-span-2 md:col-span-1'>
                        <h4 className="font-semibold">Nombre del proyecto: </h4>
                        <p>{userData.nameProject}</p>
                      </div>
                      <div className='col-span-2 md:col-span-1'>
                        <h4 className="font-semibold">Tipo de proyecto: </h4>
                        <p>{userData.typeProject}</p>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <div className="flex justify-between mt-5">
                  <div className="my-5">
                    <p className="font-semibold">Tipo:</p>
                    <p>{materials.tipo}</p>
                  </div>

                  <div className="my-5">
                    <p className="font-semibold">Desperdicio:</p>
                    <p>{materials.desperdicio} %</p>
                  </div>

                  <div className="my-5">
                    <p className="font-semibold">Metros cuadrados:</p>
                    <p>{materials.metrocuadrado} m²</p>
                  </div>
                </div>

                <Table aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn>Material</TableColumn>
                    <TableColumn>Unidad de medida</TableColumn>
                    <TableColumn>Cantidad</TableColumn>
                    {
                      price ?
                        <TableColumn>Precio por unidad</TableColumn>
                        :
                        <TableColumn></TableColumn>
                    }

                  </TableHeader>

                  <TableBody>
                    {materials?.values?.map((material, i) => (
                      <TableRow key={i} className="text-left">
                        <TableCell>{material.nombre}</TableCell>
                        <TableCell>
                          {datosJson[material.tipo][material.nombre].medida}
                        </TableCell>
                        <TableCell>
                          {Math.round(
                            datosJson[material.tipo][material.nombre].valor *
                            materials.metrocuadrado * (materials.desperdicio > 0 ? (parseInt(materials.desperdicio) / 100) + 1 : 1)
                          )}
                        </TableCell>
                        {
                          price ?
                            <TableCell>
                              <Input
                                type="number"
                                placeholder="0 $"
                                min={0}
                                max={1000000}
                                onChange={(e) => manejarCambio('inputOne' + i, (
                                  e.target.value
                                  *
                                  Math.round(
                                    datosJson[material.tipo][material.nombre].valor *
                                    materials.metrocuadrado * (materials.desperdicio > 0 ? (parseInt(materials.desperdicio) / 100) + 1 : 1)
                                  )
                                )
                                )}
                              />
                            </TableCell>
                            :
                            <TableCell></TableCell>
                        }
                      </TableRow>
                    ))}

                    {datosJson.complementos != undefined ? (
                      <TableRow key={100} className="text-left">
                        <TableCell>
                          <h2 className="font-semibold text-base">Complementos</h2>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    ) : null}

                    {datosJson.complementos != undefined
                      ? datosJson.complementos.map((complemento, i) => (
                        <TableRow key={i + 10} className="text-left">
                          <TableCell>{complemento.material}</TableCell>
                          <TableCell>{complemento.medida}</TableCell>
                          <TableCell>
                            {Math.round(complemento.valor * materials.metrocuadrado * (materials.desperdicio > 0 ? (parseInt(materials.desperdicio) / 100) + 1 : 1))}
                          </TableCell>
                          {
                            price ?
                              <TableCell>
                                <Input
                                  type="number"
                                  placeholder="0 $"
                                  min={0}
                                  max={1000000}
                                  onChange={(e) => manejarCambio('inputTwo' + i, (
                                    e.target.value
                                    *
                                    Math.round(complemento.valor * materials.metrocuadrado * (materials.desperdicio > 0 ? (parseInt(materials.desperdicio) / 100) + 1 : 1))
                                  )
                                  )}
                                />
                              </TableCell>
                              :
                              <TableCell></TableCell>
                          }

                        </TableRow>
                      ))
                      : null}

                    {datosJson.metales != undefined ? (
                      <TableRow key={101} className="text-left">
                        <TableCell>
                          <h2 className="font-semibold text-base">Metales</h2>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    ) : null}

                    {datosJson.metales != undefined
                      ? datosJson.metales.map((metal, i) => {

                        if (metal?.equal?.length > 0) {
                          if (
                            metal?.equal?.length == 1 &&
                            metal?.equal[0] ==
                            materials?.values.find((e) => e.tipo == "aislante")
                              .nombre
                          ) {
                            return (
                              <TableRow key={i + 20} className="text-left">
                                <TableCell>{metal.material}</TableCell>
                                <TableCell>{metal.medida}</TableCell>
                                <TableCell>
                                  {Math.round(metal.valor * materials.metrocuadrado)}
                                </TableCell>
                                {
                                  price ?
                                    <TableCell>
                                      <Input
                                        type="number"
                                        placeholder="0 $"
                                        min={0}
                                        max={1000000}
                                        onChange={(e) => manejarCambio('inputThree' + i, (
                                          e.target.value
                                          *
                                          Math.round(metal.valor * materials.metrocuadrado)
                                        )
                                        )}
                                      />
                                    </TableCell>
                                    :
                                    <TableCell></TableCell>
                                }

                              </TableRow>
                            );
                          } else if (
                            metal?.equal?.length == 2 &&
                            (metal?.equal[0] ==
                              materials?.values.find((e) => e.tipo == "aislante")
                                .nombre ||
                              metal?.equal[1] !=
                              materials?.values.find((e) => e.tipo == "aislante")
                                .nombre)
                          ) {
                            return (
                              <TableRow key={i + 20} className="text-left">
                                <TableCell>{metal.material}</TableCell>
                                <TableCell>{metal.medida}</TableCell>
                                <TableCell>
                                  {Math.round(metal.valor * materials.metrocuadrado)}
                                </TableCell>
                                {
                                  price ?
                                    <TableCell>
                                      <Input
                                        type="number"
                                        min={0}
                                        max={1000000}
                                        placeholder="0 $"
                                        onChange={(e) => manejarCambio('inputFour' + i, (
                                          e.target.value
                                          *
                                          Math.round(metal.valor * materials.metrocuadrado)
                                        )
                                        )}
                                      />
                                    </TableCell>
                                    :
                                    <TableCell></TableCell>
                                }

                              </TableRow>
                            );
                          }
                        } else {
                          return (
                            <TableRow key={i + 20} className="text-left">
                              <TableCell>{metal.material}</TableCell>
                              <TableCell>{metal.medida}</TableCell>
                              <TableCell>
                                {Math.round(metal.valor * materials.metrocuadrado)}
                              </TableCell>
                              {
                                price ?
                                  <TableCell>
                                    <Input
                                      type="number"
                                      placeholder="0 $"
                                      min={0}
                                      max={1000000}
                                      onChange={(e) => manejarCambio('inputFive' + i, (
                                        e.target.value
                                        *
                                        Math.round(metal.valor * materials.metrocuadrado)
                                      )
                                      )}
                                    />
                                  </TableCell>
                                  :
                                  <TableCell></TableCell>
                              }

                            </TableRow>
                          );
                        }
                      })
                      : null}

                    {
                      price ?
                        <TableRow key={102} className="text-left">
                          <TableCell>
                            <h2 className="font-semibold text-base">TOTAL</h2>
                          </TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell>
                            <h2 className="font-semibold text-base">
                              {
                                totalPrice + " $"
                              }
                            </h2>
                          </TableCell>

                        </TableRow>
                        :
                        null
                    }


                  </TableBody>
                </Table>

                <Button
                  className="my-5"
                  size="lg"
                  color="primary"
                  onPress={() => setPrice(!price)}
                >{
                    price ? "Quitar precios" : "Agregar precios"
                  }</Button>

                <h3 className="text-lg mt-5 font-bold text-left">Notas</h3>
                <ul className="list-disc text-left text-sm pl-4">
                  <li>
                    Estas cantidades son aproximadas y no se deben de considerar como
                    definitivas, ya que se deberán de revisar por los responsables de
                    los trabajos.
                  </li>
                  <li>
                    Solo se indican las cantidades a utilizar, más no así el tipo de
                    anclaje.
                  </li>
                  <li>No se consideran refuerzos, esquinas ni huecos para ventanas.</li>
                  <li>
                    En esta explosión de insumos solo se indican las cantidades de
                    perfiles metálicos más no así su dimensión.
                  </li>
                </ul>
              </div>

              <Button
                className="my-5 bt-new"
                size="lg"
                color="primary"
                onPress={() => navigate("/")}
              >
                Crear nueva cotización
              </Button>


            </div>
          </Card>
        </Transition>
      </section>
    </main>
  );
};

export default Result;
