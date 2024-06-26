import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
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
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const Result = () => {
  const navigate = useNavigate();

  const f = new Intl.NumberFormat(undefined, {
    currency: "COP",
    style: "currency",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const {
    setUserData,
    materials,
    userData,
    cielorasoCorridoExt: datosCielorasoCorridoExt,
    cielorasoCorridoInt: datosCielorasoCorridoInt,
    cielorasoReticular: datosCielorasoReticular,
    muroExterior: datosMuroExterior,
    muroInterior: datosMuroInterior,
    whatsapp,
  } = useProvider();

  const [sendData, setSendData] = useState(false);
  const [price, setPrice] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [complementos, setComplementos] = useState([]);
  const [materiales, setMateriales] = useState([]);
  const [metales, setMetales] = useState([]);
  const [suspencion, setSuspencion] = useState([]);

  useEffect(() => {
    const datosJson = data();

    if (datosJson) {
      const priceInfoOne = materials?.values?.map((material) => {
        let type = material.tipo;
        if (material.tipo == "placa") {
          type = "Tipo Placa";
        } else if (material.tipo == "suspencion") {
          type = "Suspención";
        } else if (material.tipo == "acabado") {
          type = "Nivel de acabado";
        }
        return {
          nombre: material.nombre,
          medida: datosJson[material.tipo][material.nombre].medida,
          cantidad: Math.ceil(
            datosJson[material.tipo][material.nombre].valor *
              materials.metrocuadrado *
              (materials.desperdicio > 0
                ? parseInt(materials.desperdicio) / 100 + 1
                : 1)
          ),
          precio: 0,
          subtotal: 0,
          tipo: type,
        };
      });
      setMateriales(priceInfoOne);

      const priceInfoTwo = datosJson?.complementos?.map((complemento) => {
        if (complemento?.equal?.length > 0) {
          if (
            complemento?.equal.find((mm) =>
              materials?.values
                .find((e) => e.tipo == "acabado")
                .nombre.includes(mm)
            )
          ) {
            return {
              nombre: complemento.material,
              medida: complemento.medida,
              cantidad: Math.ceil(
                complemento.valor *
                  materials.metrocuadrado *
                  (materials.desperdicio > 0
                    ? parseInt(materials.desperdicio) / 100 + 1
                    : 1)
              ),
              precio: 0,
              subtotal: 0,
            };
          }
        } else {
          return {
            nombre: complemento.material,
            medida: complemento.medida,
            cantidad: Math.ceil(
              complemento.valor *
                materials.metrocuadrado *
                (materials.desperdicio > 0
                  ? parseInt(materials.desperdicio) / 100 + 1
                  : 1)
            ),
            precio: 0,
            subtotal: 0,
          };
        }
      });
      setComplementos(priceInfoTwo);

      if (datosJson?.metales) {
        const priceInfoThree = datosJson?.metales
          ?.map((metal) => {
            if (metal?.equal?.length > 0) {
              if (
                metal?.equal.find((mm) =>
                  materials?.values
                    .find((e) => e.tipo == "aislante")
                    .nombre.includes(mm)
                )
              ) {
                return {
                  nombre: metal.material,
                  medida: metal.medida,
                  cantidad: Math.ceil(
                    metal.valor *
                      materials.metrocuadrado *
                      (materials.desperdicio > 0
                        ? parseInt(materials.desperdicio) / 100 + 1
                        : 1)
                  ),
                  precio: 0,
                  subtotal: 0,
                };
              }
            } else {
              return {
                nombre: metal.material,
                medida: metal.medida,
                cantidad: Math.ceil(
                  metal.valor *
                    materials.metrocuadrado *
                    (materials.desperdicio > 0
                      ? parseInt(materials.desperdicio) / 100 + 1
                      : 1)
                ),
                precio: 0,
                subtotal: 0,
              };
            }
            return null;
          })
          .filter((e) => e);
        // console.log("-------", priceInfoThree);
        setMetales(priceInfoThree);
      }

      if (datosJson?.suspencion) {
        const priceInfoFour = datosJson?.suspencion?.map((susp) => {
          return {
            nombre: susp.material,
            medida: susp.medida,
            cantidad: Math.ceil(
              susp.valor *
                materials.metrocuadrado *
                (materials.desperdicio > 0
                  ? parseInt(materials.desperdicio) / 100 + 1
                  : 1)
            ),
            precio: 0,
            subtotal: 0,
          };
        });
        setSuspencion(priceInfoFour);
      }
    }
  }, [materials]);

  useEffect(() => {
    if (
      materiales?.length > 0 &&
      !sendData &&
      (complementos?.length > 0 ||
        metales?.length > 0 ||
        suspencion?.length > 0)
    ) {
      sendDataServer(materiales, complementos, metales, suspencion).then(
        (e) => {}
      );
      setSendData(true);
    }
  }, [materiales, complementos]);

  useEffect(() => {
    let tempTotalPriceMat = materiales
      ? materiales
          ?.map((e) => e.subtotal)
          .reduce((acumulador, valorActual) => acumulador + valorActual, 0)
      : 0;
    let tempTotalPriceCom = complementos
      ? complementos
          ?.map((e) => e?.subtotal ?? 0)
          .reduce((acumulador, valorActual) => acumulador + valorActual, 0)
      : 0;
    let tempTotalPriceMet = metales
      ? metales
          ?.map((e) => e?.subtotal ?? 0)
          .reduce((acumulador, valorActual) => acumulador + valorActual, 0)
      : 0;
    let tempTotalPriceMSuspen = suspencion
      ? suspencion
          ?.map((e) => e?.subtotal ?? 0)
          .reduce((acumulador, valorActual) => acumulador + valorActual, 0)
      : 0;
    setTotalPrice(
      tempTotalPriceMat +
        tempTotalPriceCom +
        tempTotalPriceMet +
        tempTotalPriceMSuspen
    );
  }, [materiales, complementos, metales, suspencion]);

  const sendDataServer = async (material, complement, metales, suspencion) => {
    const data = {
      name: userData.name,
      document_type: userData.typeDocument,
      document: userData.document,
      email: userData.email,
      cellphone: userData.cellphone,
      project_name: userData.nameProject,
      project_type: userData.typeProject,
      items: [
        ...material,
        ...(complement ?? []),
        ...(metales ?? []),
        ...(suspencion ?? []),
      ],
    };
    const response = await fetch(
      `${window.location.origin}${window.location.pathname}src/index.php?option=create_seco`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  };

  const manejarCambio = (index, valor, grupo) => {
    if (!valor || valor == "NaN") {
      valor = 0;
    }
    if (grupo === 1) {
      const data = materiales;
      // const index = data.findIndex((e) => e.nombre == nombre);
      data[index].precio = valor;
      data[index].subtotal = valor * data[index].cantidad;
      setMateriales([...data]);
    } else if (grupo === 2) {
      const data = complementos;
      // const index = data.findIndex((e) => e.nombre == nombre);
      data[index].precio = valor;
      data[index].subtotal = valor * data[index].cantidad;
      setComplementos([...data]);
    } else if (grupo === 3) {
      const data = metales;
      // const index = data.findIndex((e) => e.nombre == nombre);
      data[index].precio = valor;
      data[index].subtotal = valor * data[index].cantidad;
      setMetales([...data]);
    } else if (grupo === 4) {
      const data = suspencion;
      // const index = data.findIndex((e) => e.nombre == nombre);
      data[index].precio = valor;
      data[index].subtotal = valor * data[index].cantidad;
      setSuspencion([...data]);
    }
  };

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

    if (materials.tipo == "Muro Interior") return datosMuroInterior;

    if (materials.tipo == "Muro Facahada") return datosMuroExterior;
  };

  const createPdf = () => {
    localStorage.pdf = JSON.stringify({
      userData,
      materials: {
        ...materials,
        totalPrice,
        values: {
          materiales: [...materiales],
          complementos: complementos ? [...complementos] : [],
          metales: metales ? [...metales] : [],
          suspencion: suspencion ? [...suspencion] : [],
        },
      },
    });
    console.log({
      userData,
      materials: {
        ...materials,
        totalPrice,
        values: {
          materiales: [...materiales],
          complementos: complementos ? [...complementos] : [],
          metales: metales ? [...metales] : [],
          suspencion: suspencion ? [...suspencion] : [],
        },
      },
    })
    window.open(
      `${window.location.origin}${window.location.pathname}#/PdfView`
    );
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-5 min-h-screen">
      <section className="bg-left col-span-1 md:col-span-1 p-4 flex items-center justify-end"></section>
      <section className="bg-right col-span-1 md:col-span-4 p-4  flex flex-col justify-center">
        <div className="flex justify-between" style={{ maxWidth: "900px" }}>
          <div className="cont-logo pb-0">
            <img
              className="pb-0 mx-auto"
              src="./img/logo.svg"
              alt=""
              style={{ width: "150px" }}
            />
          </div>
          <Card className="menu-result flex flex-row box-border p-5 justify-around gap-5 rounded-none rounded-t-lg mr-5">
            <Tooltip content="Descargar" color="primary">
              <Button
                size="lg"
                className="text-xl"
                isIconOnly
                color="primary"
                onClick={createPdf}
              >
                <FaFileDownload />
              </Button>

              {/* <Button size="lg" className='text-xl' isIconOnly color="primary"
                onClick={createPdf}>
                
              </Button> */}
            </Tooltip>
            <Tooltip content="Enviar a email" color="primary">
              <Button size="lg" className="text-xl" isIconOnly color="primary">
                <MdAttachEmail />
              </Button>
            </Tooltip>
            <Tooltip content="Contactar" color="primary">
              <Button size="lg" className="text-xl" isIconOnly color="primary">
                <a
                  href={`https://wa.me/57${whatsapp.number}/?text=Hola%20acabo%20de%20realizar%20una%20cotización%20desde%20la%20web`}
                  target="_blank"
                >
                  <IoLogoWhatsapp />
                </a>
              </Button>
            </Tooltip>
          </Card>
        </div>

        <Transition>
          <Card className="card-result p-10 ms-5">
            <div className="container  container-medium relative">
              <div id="print" className="p-5">
                <h2 className="text-2xl font-bold">
                  Cálculo construcción en seco{" "}
                </h2>

                <div className="result-info mt-5" style={{ width: "100%" }}>
                  <Card className="col-span-1 md:col-span-3 ">
                    <CardBody className="gap-4 p-10 grid grid-cols-2 md:grid-cols-3">
                      <img
                        className="mb-10 mx-auto col-span-2 md:col-span-3"
                        src="./img/logo.svg"
                        alt=""
                        style={{ width: "180px" }}
                      />

                      <div className="col-span-2 md:col-span-1">
                        <h4 className="font-semibold">Cliente: </h4>
                        <p>{userData.name}</p>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <h4 className="font-semibold">Documento: </h4>
                        <p>{userData.typeDocument + " " + userData.document}</p>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <h4 className="font-semibold">Email: </h4>
                        <p>{userData.email}</p>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <h4 className="font-semibold">Celular: </h4>
                        <p>{userData.cellphone}</p>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <h4 className="font-semibold">Nombre del proyecto: </h4>
                        <p>{userData.nameProject}</p>
                      </div>
                      <div className="col-span-2 md:col-span-1">
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
                    {price ? (
                      <TableColumn>Precio por unidad</TableColumn>
                    ) : (
                      <TableColumn></TableColumn>
                    )}
                    {price ? (
                      <TableColumn>Sub Total</TableColumn>
                    ) : (
                      <TableColumn></TableColumn>
                    )}
                  </TableHeader>

                  <TableBody>
                    {materiales?.map((material, i) => (
                      <TableRow key={i} className="text-left">
                        <TableCell>
                          <span className="font-bold capitalize">
                            {material.tipo}:
                          </span>{" "}
                          {material.nombre}
                        </TableCell>
                        <TableCell>{material.medida}</TableCell>
                        <TableCell>{material.cantidad}</TableCell>
                        {price ? (
                          <TableCell>
                            <NumericFormat
                              min={100}
                              max={1000000}
                              prefix="$ "
                              thousandSeparator="."
                              decimalSeparator=","
                              customInput={Input}
                              defaultValue={0}
                              onValueChange={(e) => {
                                try {
                                  manejarCambio(
                                    i,
                                    parseFloat(e.floatValue),
                                    1
                                  );
                                } catch (e) {
                                  manejarCambio(i, 0, 1);
                                }
                              }}
                            />
                          </TableCell>
                        ) : (
                          <TableCell></TableCell>
                        )}
                        {price ? (
                          <TableCell>{f.format(material.subtotal)}</TableCell>
                        ) : (
                          <TableCell></TableCell>
                        )}
                      </TableRow>
                    ))}

                    {complementos && complementos?.length > 0 ? (
                      <TableRow key={100} className="text-left">
                        <TableCell>
                          <h2 className="font-semibold text-base">
                            Complementos
                          </h2>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    ) : null}

                    {complementos && complementos?.length > 0
                      ? complementos.map((complemento, i) =>
                          complemento ? (
                            <TableRow key={i + 10} className="text-left">
                              <TableCell>{complemento.nombre}</TableCell>
                              <TableCell>{complemento.medida}</TableCell>
                              <TableCell>{complemento.cantidad}</TableCell>
                              {price ? (
                                <TableCell>
                                  <NumericFormat
                                    prefix="$ "
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    customInput={Input}
                                    defaultValue={0}
                                    onValueChange={(e) => {
                                      try {
                                        manejarCambio(
                                          i,
                                          parseFloat(e.floatValue),
                                          2
                                        );
                                      } catch (e) {
                                        manejarCambio(i, 0, 2);
                                      }
                                    }}
                                  />
                                </TableCell>
                              ) : (
                                <TableCell></TableCell>
                              )}
                              {price ? (
                                <TableCell>
                                  {f.format(complemento.subtotal)}
                                </TableCell>
                              ) : (
                                <TableCell></TableCell>
                              )}
                            </TableRow>
                          ) : null
                        )
                      : null}

                    {metales && metales?.length > 0 ? (
                      <TableRow key={101} className="text-left">
                        <TableCell>
                          <h2 className="font-semibold text-base">Metales</h2>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    ) : null}

                    {metales && metales?.length > 0
                      ? metales.map((metal, i) => {
                          return metal ? (
                            <TableRow key={i + 20} className="text-left">
                              <TableCell>{metal.nombre}</TableCell>
                              <TableCell>{metal.medida}</TableCell>
                              <TableCell>{metal.cantidad}</TableCell>
                              {price ? (
                                <TableCell>
                                  <NumericFormat
                                    prefix="$ "
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    customInput={Input}
                                    defaultValue={0}
                                    onValueChange={(e) => {
                                      try {
                                        manejarCambio(
                                          i,
                                          parseFloat(e.floatValue),
                                          3
                                        );
                                      } catch (e) {
                                        manejarCambio(i, 0, 3);
                                      }
                                    }}
                                  />
                                </TableCell>
                              ) : (
                                <TableCell></TableCell>
                              )}
                              {price ? (
                                <TableCell>
                                  {f.format(metal.subtotal)}
                                </TableCell>
                              ) : (
                                <TableCell></TableCell>
                              )}
                            </TableRow>
                          ) : null;
                        })
                      : null}

                    {suspencion && suspencion?.length > 0 ? (
                      <TableRow key={101} className="text-left">
                        <TableCell>
                          <h2 className="font-semibold text-base">
                            Suspensión
                          </h2>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    ) : null}

                    {suspencion && suspencion?.length > 0
                      ? suspencion.map((susp, i) => {
                          return susp ? (
                            <TableRow key={i + 20} className="text-left">
                              <TableCell>{susp.nombre}</TableCell>
                              <TableCell>{susp.medida}</TableCell>
                              <TableCell>{susp.cantidad}</TableCell>
                              {price ? (
                                <TableCell>
                                  <NumericFormat
                                    prefix="$ "
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    customInput={Input}
                                    defaultValue={0}
                                    onValueChange={(e) => {
                                      try {
                                        manejarCambio(
                                          i,
                                          parseFloat(e.floatValue),
                                          4
                                        );
                                      } catch (e) {
                                        manejarCambio(i, 0, 4);
                                      }
                                    }}
                                  />
                                </TableCell>
                              ) : (
                                <TableCell></TableCell>
                              )}
                              {price ? (
                                <TableCell>{f.format(susp.subtotal)}</TableCell>
                              ) : (
                                <TableCell></TableCell>
                              )}
                            </TableRow>
                          ) : null;
                        })
                      : null}

                    {price ? (
                      <TableRow key={102} className="text-left">
                        <TableCell>
                          <h2 className="font-semibold text-base">TOTAL</h2>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <h2 className="font-semibold text-base ">
                            {f.format(totalPrice)}
                          </h2>
                        </TableCell>
                      </TableRow>
                    ) : null}
                  </TableBody>
                </Table>

                <Button
                  className="my-5"
                  size="lg"
                  color="primary"
                  onPress={() => setPrice(!price)}
                >
                  {price ? "Quitar precios" : "Agregar precios"}
                </Button>

                <h3 className="text-lg mt-5 font-bold text-left">Notas</h3>
                <ul className="list-disc text-left text-sm pl-4">
                  <li>
                    Estas cantidades son aproximadas y no se deben de considerar
                    como definitivas, ya que se deberán de revisar por los
                    responsables de los trabajos.
                  </li>
                  <li>
                    Solo se indican las cantidades a utilizar, más no así el
                    tipo de anclaje.
                  </li>
                  <li>
                    No se consideran refuerzos, esquinas ni huecos para
                    ventanas.
                  </li>
                  <li>
                    En esta lista de insumos solo se indican las cantidades de
                    perfiles metálicos más no así su dimensión.
                  </li>
                  <li>
                    Fiberglass no se hace responsable de las cantidades, debido
                    a que esta herramientas nos ofrece un cálculo teórico.
                  </li>
                </ul>
              </div>

              <Button
                type="button"
                className="my-5 bt-new"
                size="lg"
                color="primary"
                onPress={() => {
                  console.log(userData);
                  setUserData(userData);
                  navigate("/");
                }}
              >
                Crear nueva calculadora
              </Button>
            </div>
          </Card>
        </Transition>
      </section>
    </main>
  );
};

export default Result;
