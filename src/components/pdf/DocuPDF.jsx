import React from "react";
import {
  Document,
  Page,
  Image,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import { useProvider } from "../context/Provider";

const DocuPDF = () => {
  const styles = StyleSheet.create({
    page: {
      position: "relative",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100%",
    },
    title: {
      fontSize: "12px",
      fontWeight: '900',
    }, 
    titleOther: {
      fontSize: "12px",
      margin: "5px",
    },
    paragraph: {
      fontSize: "10px",
      fontWeight: "normal",
    },
    paragraphNote: {
      fontSize: "9px",
      fontWeight: "normal",
    },
    sectionOne: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "10px 50px",
    },
    sectionTwo: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      border: "solid 1px black",
    },
    tableTh: {
      width: "25%",
      border: "1px solid black",
      padding: "2px 5px",
    },
  });

  const f = new Intl.NumberFormat(undefined, {
    currency: "COP",
    style: "currency",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const data = JSON.parse(localStorage.pdf);

  return (
    <Document>
      <Page size="A4">
        <View>
          <Image
            src={`${window.location.origin}${window.location.pathname}/img/pdf-header.jpg`}
            style="width: 100%; "
            alt=""
          />
        </View>

        <View
          style={{
            backgroundColor: "#FFCF00",
            width: "88%",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <Text style={{ margin: "0 0 10px 0" }}>Cálculo construcción en seco</Text>
          <View style={styles.sectionOne}>
            <View>
              <Text style={styles.title}>Cliente:</Text>
              <Text style={styles.paragraph}>{data.userData.name}</Text>
            </View>
            <View>
              <Text style={styles.title}>Documento:</Text>
              <Text style={styles.paragraph}>
                {data.userData.typeDocument + " " + data.userData.document}
              </Text>
            </View>
            <View>
              <Text style={styles.title}>Email:</Text>
              <Text style={styles.paragraph}>{data.userData.email}</Text>
            </View>
            <View>
              <Text style={styles.title}>Celular:</Text>
              <Text style={styles.paragraph}>{data.userData.cellphone}</Text>
            </View>
            <View>
              <Text style={styles.title}>Tipo de proyecto:</Text>
              <Text style={styles.paragraph}>{data.userData.typeProject}</Text>
            </View>
            <View>
              <Text style={styles.title}>Nombre del proyecto:</Text>
              <Text style={styles.paragraph}>{data.userData.nameProject}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#FFCF00",
            width: "88%",
            margin: "0 auto",
            padding: "10px 20px",
          }}
        >
          <View style={styles.sectionOne}>
            <View>
              <Text style={styles.title}>Tipo:</Text>
              <Text style={styles.paragraph}>{data.materials.tipo}</Text>
            </View>
            <View>
              <Text style={styles.title}>Desperdicio:</Text>
              <Text style={styles.paragraph}>
                {data.materials.desperdicio + "%"}
              </Text>
            </View>
            <View>
              <Text style={styles.title}>Metros cuadrados:</Text>
              <Text style={styles.paragraph}>
                {data.materials.metrocuadrado}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#FFCF00",
            width: "88%",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <View style={styles.sectionTwo}>
            <View style={styles.tableTh}>
              <Text style={styles.title}>Material:</Text>
            </View>
            <View style={styles.tableTh}>
              <Text style={styles.title}>Unidad de medida:</Text>
            </View>
            <View style={styles.tableTh}>
              <Text style={styles.title}>Cantidad:</Text>
            </View>
            <View style={styles.tableTh}>
              <Text style={styles.title}>Precio por unidad:</Text>
            </View>
          </View>
          {data.materials.values.materiales.map((val) => (
            <View style={styles.sectionTwo}>
              <View style={styles.tableTh}>
                <Text style={styles.paragraph}> {val.nombre} </Text>
              </View>
              <View style={styles.tableTh}>
                <Text style={styles.paragraph}> {val.medida} </Text>
              </View>
              <View style={styles.tableTh}>
                <Text style={styles.paragraph}> {val.cantidad} </Text>
              </View>
              <View style={styles.tableTh}>
                <Text style={styles.paragraph}> {f.format(val.subtotal)} </Text>
              </View>
            </View>
          ))}
          {
            data.materials.values.complementos.length > 0 &&
            <Text style={styles.titleOther}> Complementos </Text>
          }
          {
            data.materials.values.complementos.length > 0 &&
            data.materials.values.complementos.map((val) => (
                <View style={styles.sectionTwo}>
                  <View style={styles.tableTh}>
                    <Text style={styles.paragraph}> {val.nombre} </Text>
                  </View>
                  <View style={styles.tableTh}>
                    <Text style={styles.paragraph}> {val.medida} </Text>
                  </View>
                  <View style={styles.tableTh}>
                    <Text style={styles.paragraph}> {val.cantidad} </Text>
                  </View>
                  <View style={styles.tableTh}>
                    <Text style={styles.paragraph}> {f.format(val.subtotal)} </Text>
                  </View>
                </View>
            ))}
            {
            data.materials.values.metales.length > 0 &&
            <Text style={styles.titleOther}> Metales </Text>
            }
          {
            data.materials.values.metales.length > 0 &&
            data.materials.values.metales.map((val) => (
                <View style={styles.sectionTwo}>
                  <View style={styles.tableTh}>
                    <Text style={styles.paragraph}> {val.nombre} </Text>
                  </View>
                  <View style={styles.tableTh}>
                    <Text style={styles.paragraph}> {val.medida} </Text>
                  </View>
                  <View style={styles.tableTh}>
                    <Text style={styles.paragraph}> {val.cantidad} </Text>
                  </View>
                  <View style={styles.tableTh}>
                    <Text style={styles.paragraph}> {f.format(val.subtotal)} </Text>
                  </View>
                </View>
            ))}
          <View style={styles.sectionTwo}>
            <View style={styles.tableTh}>
              <Text style={styles.paragraph}> Total: </Text>
            </View>
            <View style={styles.tableTh}>
              <Text style={styles.paragraph}>
                {" "}
                {f.format(data.materials.totalPrice)}{" "}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#FFCF00",
            width: "88%",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <Text style={styles.title}>Notas</Text>
          <Text style={styles.paragraphNote}>
            Estas cantidades son aproximadas y no se deben de considerar como
            definitivas, ya que se deberán de revisar por los responsables de
            los trabajos.
          </Text>
          <Text style={styles.paragraphNote}>
            Solo se indican las cantidades a utilizar, más no así el tipo de
            anclaje.
          </Text>
          <Text style={styles.paragraphNote}>
            No se consideran refuerzos, esquinas ni huecos para ventanas.
          </Text>
          <Text style={styles.paragraphNote}>
            En esta explosión de insumos solo se indican las cantidades de
            perfiles metálicos más no así su dimensión.
          </Text>
        </View>

        <View style=" margin-top: -4px">
          <Image
            src={`${window.location.origin}${window.location.pathname}/img/pdf-footer.jpg`}
            style="width: 100%;"
            alt=""
          />
        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;
