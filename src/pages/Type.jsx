import React from 'react'
import { useLocation } from 'react-router-dom';
import First from '../components/First';
import Breadcrumb from '../components/Breadcrumb';
import Transition from '../components/Transition';


const Type = () => {

  const listFirst = [
    {
      title: "Plafones",
      img: "/img/plafones.png",
      href: "/type?type=plafones",
    },
    {
      title: "Muros",
      img: "/img/muros.png",
      href: "/type?type=muros",
    },

  ];

  const listPlafones = [
    {
      title: "Plafones corridos",
      img: "/img/plafon_corrido.png",
      href: "/adjust?type=plafonesCorridos",
    },
    {
      title: "Plafones reticulares",
      img: "/img/plafon_reticular.png",
      href: "/adjust?type=plafonesReticulares",
    },

  ];

  const listMuros = [
    {
      title: "Interior - Interior",
      img: "/img/muro_sencillo_int_int.png",
      href: "/adjust?type=intInt",
    },
    {
      title: "Exterior - Interior",
      img: "/img/muro_sencillo_int_ext.png",
      href: "/adjust?type=extInt",
    },
    {
      title: "Exterior - Exterior",
      img: "/img/muro_ext_ext.png",
      href: "/adjust?type=extExt",
    },

  ];


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

              : type == "plafones" ?

                listPlafones.map((item, index) => (
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
      </div>
    </Transition>
  )
}

export default Type