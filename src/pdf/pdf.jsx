import React from 'react'
import { Document, Page } from '@react-pdf/renderer'

const pdf = () => {
    return (
        <Document>
            <Page size="A4">
            <View style="width: 800px; margin: 0; padding: 0; font-family: Arial;">
                <View style="display: flex;">
                    <img src="/public/img/pdf-header.jpg" style="width: 100%;margin: 0; padding: 0" alt="" />
                </View>
                <View
                    style="background-image: url(/public/img/pdf-body.jpg); background-size: 100%; display: flex;"
                >
                    <View style="width: 80%; margin: 0 auto; background-color: white; padding: 15px; border-radius: 20px;">
                        <Text>Cálculo construcción en seco</Text>
                        <div style="display: grid; grid-template-rows: repeat(2, 1fr); grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 0;">
                            <div>
                                <h4>Cliente</h4>
                                <p>Mario</p>
                            </div>
                            <div>
                                <h4>Documento</h4>
                                <p>Mario</p>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>Mario</p>
                            </div>
                            <div>
                                <h4>Celular</h4>
                                <p>Mario</p>
                            </div>
                            <div>
                                <h4>Nombre del proyecto</h4>
                                <p>Mario</p>
                            </div>
                            <div>
                                <h4>Tipo de proyecto</h4>
                                <p>Mario</p>
                            </div>
                        </div>
                        <hr />
                        <div
                            style="display: grid; grid-template-rows: repeat(1, 1fr); grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 0;">
                            <div>
                                <h4>Tipo</h4>
                                <p>Mario</p>
                            </div>
                            <div>
                                <h4>Desperdicio</h4>
                                <p>Mario</p>
                            </div>
                            <div>
                                <h4>Metros cuadrados</h4>
                                <p>Mario</p>
                            </div>
                        </div>
                        <hr />
                        <table style="border-collapse: collapse; width: 100%; text-align: left;">
                            <tr >
                                <th>Material</th>
                                <th>Unidad de medida</th>
                                <th>Cantidad</th>
                                <th>Precio por unidad</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </table>
                        <View style="text-align: left; margin-top: 50px;">
                            <Text>Notas</Text>
                            <View>
                                Estas cantidades son aproximadas y no se deben de considerar como
                                definitivas, ya que se deberán de revisar por los responsables de
                                los trabajos.
                            </View>
                            <View>
                                Solo se indican las cantidades a utilizar, más no así el tipo de
                                anclaje.
                            </View>
                            <View>No se consideran refuerzos, esquinas ni huecos para ventanas.</View>
                            <View>
                                En esta explosión de insumos solo se indican las cantidades de
                                perfiles metálicos más no así su dimensión.
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <img src="/public/img/pdf-footer.jpg" style="width: 100%;" alt="" />
                </View>
            </View>
            </Page>
        </Document>
    )
}

export default pdf