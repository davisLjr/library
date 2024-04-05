import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

export default function HeaderMobile ( ) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el drawer cuando se hace clic en un enlace
  };

  useEffect(() => {
    function handleResize() {
        setIsMobile(window.innerWidth < 375); // Cambia 375 por el ancho deseado para el modo móvil
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleDrawer}
        aria-label="Menú"
      ></button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='drawerCustom'
        size={isMobile ? 250 : 300}
        >
          <div className="px-4 pb-5">
            <h3 className="navbar-sections-title">Secciones</h3>
            <hr className="my-4" />
              <nav>
                <ul className="nav d-block nav-pills">
                  <li className="nav-item mb-3" onClick={handleLinkClick}>
                    <Link className="nav-link  " href="/getting-started">
                      <div className="nav-icon">
                      <span className="material-icons-round">home</span>
                        <span>Inicio</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link  " href="/components">
                      <div className="nav-icon">
                      <span className="material-icons-round">code</span>
                        <span>Componentes</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </nav>
              <hr className="my-4" />
              <h3 className="navbar-sections-title mt-4">Componentes</h3>
              <nav>
                <ul className="nav flex-column nav-pills pt-2">
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/access">Accesos</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/alert">Alertas</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/audio">Audio</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/banner">Banner</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/block">Bloque de trámite</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/collapse">Colapsable</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/breadcrumb">Migas de pan</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/button">Botón</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/footer">Footer</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/gallery">Galeria</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/spinner">Spinner</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/navigationVertical">Navegacion vertical</Link>
                  </li>
                  <li className="nav-item" onClick={handleLinkClick}>
                    <Link className="nav-link w-100 text-left " href="/components/navigationHorizontal">Navegacion Horizontal</Link>
                  </li>
                </ul>
              </nav>
            </div>
      </Drawer>
    </>
  )
}