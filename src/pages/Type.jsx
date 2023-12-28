import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import First from '../components/First';
import Breadcrumb from '../components/Breadcrumb';
import Transition from '../components/Transition';
import { Button, Card } from '@nextui-org/react';
import { FaChevronLeft } from 'react-icons/fa';


const Type = () => {

  const listFirst = [
    {
      title: "Cielorasos",
      img: "/img/cieloraso.jpg",
      href: "/type?type=cielorasos",
    },
    {
      title: "Muros",
      img: "/img/muro.jpg",
      href: "/type?type=muros",
    },

  ];

  const listCielorasos = [
    {
      title: "Cieloraso Corrido",
      img: "/img/cieloraso_corrido.jpg",
      href: "/adjust?type=cielorasosCorridos",
    },
    {
      title: "Cieloraso Reticular",
      img: "/img/cieloraso_reticular.jpg",
      href: "/adjust?type=cielorasosReticulares",
    },

  ];

  const listMuros = [
    {
      title: "Muro Interior - Interior",
      img: "/img/int_int.jpg",
      href: "/adjust?type=intInt",
    },
    {
      title: "Muro Facahada",
      img: "/img/muro_ext.jpg",
      href: "/adjust?type=muroFachada",
    },
    /*{
      title: "Exterior - Exterior",
      img: "/img/muro_ext_ext.png",
      href: "/adjust?type=extExt",
    },*/

  ];

  const navigate = useNavigate();


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  return (

    <main class="grid grid-cols-1 md:grid-cols-5 min-h-screen">


      <section className='bg-left col-span-1 md:col-span-2 p-4 flex items-center justify-end'>
        <article className='title-cont text-left pr-8'>
          <h2 className=' text-1xl md:text-4xl font-bold uppercase'>Paso 1:</h2>
          <h2 className=' text-1xl md:text-4xl font-normal uppercase'>Selecciona tu <br/> superficie</h2>
          <Breadcrumb />
        </article>
      </section>

      <section className="bg-right col-span-1 md:col-span-3 p-4  flex flex-col justify-center">

        <div className="cont-logo">
          <img className='mb-10 mx-auto' src="./img/logo.svg" alt="" style={{ width: "150px" }} />
        </div>
        <Transition>
          <Card className='card-cont p-10 ms-5'>
            {

              type == "inicio" ?

                listFirst.map((item, index) => (
                  <First
                    item={item}
                    key={index}
                  />
                ))

                : type == "cielorasos" ?

                  listCielorasos.map((item, index) => (
                    <First
                      item={item}
                      key={index}
                    />
                  ))

                  : type == "muros" ?

                    listMuros.map((item, index) => (
                      <First
                        item={item}
                        key={index}
                      />
                    ))

                    :
                    null
            }
            <div className='flex justify-center gap-5'>
              <Button size="lg" className='my-8' color="primary" variant="faded" onPress={() => navigate(-1)}>
                <FaChevronLeft />
                Anterior
              </Button>
            </div>
          </Card>
        </Transition>
      </section>

    </main>
  )
}

export default Type