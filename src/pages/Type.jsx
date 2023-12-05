import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import First from '../components/First';
import Breadcrumb from '../components/Breadcrumb';
import Transition from '../components/Transition';
import { Button } from '@nextui-org/react';
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


    <Transition>
      <div className='container container-medium'>
        <h2 className='text-2xl font-bold'>Paso 1: <span className='font-normal'>Selecciona tu superficie</span></h2>

        <Breadcrumb />
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 mt-5">
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
        </div>
        <div className='flex justify-center gap-5'>
          <Button size="lg" className='my-8' color="primary" variant="faded" onPress={() => navigate(-1)}>
            <FaChevronLeft />
            Anterior
          </Button>
        </div>
      </div>
    </Transition>
  )
}

export default Type