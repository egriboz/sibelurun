import Container from '../components/container'
import Hamburger from '../components/hamburger'
import { useState } from 'react'
// import NextImage from 'next/image'
import Link from 'next/link'
import Social from './social'

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
      <div className="flex">
        <div className="sitelogo">
          <Link href="/">
            <a>
              {/* <NextImage
              src="/static/images/sibelurun-logo.png"
              alt="Sibel Ürün"
              width={99}
              height={99}
            /> */}
              <img
                src="/static/images/sibelurun-logo-text.png"
                alt="Sibel Ürün"
                width={160}
                height={101}
              />
            </a>
          </Link>
        </div>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
      <div className="navigation flex flex-col">
        <div className="grid md:grid-cols-3">
          <div></div>
          <div className="px-5">
            <h3 className="text-lg font-bold mb-5">Menu.</h3>
            <ul className="font-serif text-lg">
              <li>
                <Link href="/">
                  <a>Anasayfa</a>
                </Link>
              </li>
              <li>
                <Link href="/hakkinda">
                  <a>Hakkında</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/iletisim/">
                  <a>İletişim</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-5">
            <h3 className="text-lg font-bold mb-5">Projeler.</h3>
            <ul className="font-serif text-lg">
              <li>
                <Link href="/projeler/evler">
                  <a>Evler</a>
                </Link>
              </li>
              <li>
                <Link href="/projeler/otel-eglence">
                  <a>Otel & Eğlence</a>
                </Link>
              </li>
              <li>
                <Link href="/projeler/aksesuarlar">
                  <a>Aksesuar</a>
                </Link>
              </li>
              <li>
                <Link href="/projeler/ticari-alanlar">
                  <a>Ticari Alanlar</a>
                </Link>
              </li>
              <li>
                <Link href="/projeler/mimari">
                  <a>Mimari</a>
                </Link>
              </li>

              <li>
                <Link href="/projeler/once-sonra">
                  <a>Önce Sonra</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-5 hidden md:block">
          <div className="footer-bottom grid md:grid-cols-3 border-accent-4 border-t border-opacity-10">
            <div className="px-5 py-5">
              <p className="text-md font-bold">Konuşalım.</p>
              <p className="font-serif">
                <span className="block">+90(212) 951 05 75</span>
                <span className="block">sibel@sibelurun.com</span>
              </p>
            </div>
            <div className="px-5 py-5 border-accent-4 border-r border-l border-opacity-10">
              <p className="text-md font-bold">Ziyaret edin.</p>
              <p className="font-serif">
                <span className="block">Süleyman Seba Cad. No:79</span>
                <span className="block">Maçka Beşiktaş</span>
              </p>
            </div>
            <div className="px-5 py-5">
              <p className="text-md font-bold">Güncel kalın.</p>
              <Social />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        html,
        body {
          overflow: ${hamburgerOpen ? 'hidden' : 'unset'};
        }
        .footer-bottom {
          position: absolute;
          bottom: 0px;
          width: calc(100% - 2.5rem);
        }
        .navigation {
          display: ${hamburgerOpen ? 'flex' : 'none'};
          background-color: #f4f1eb;
          padding-top: 60px;
          width: 100%;
          height: calc(100vh + 5px);
          position: absolute;
          z-index: 8;
          top: 0px;
          left: 0px;
        }
        @media screen and (max-height: 440px) {
          .navigation {
            overflow-x: scroll;
          }
          .footer-bottom {
            position: static;
            margin-top: 20px;
          }
        }
        // .navigation .ul {
        //   display: flex;
        //   flex-wrap: wrap;
        //   float: right;
        //   margin: 0px;
        //   padding: 200px 0 0 0;
        //   overflow: hidden;
        // }
        .hamburger {
          display: fixed;
          padding-top: 10px;
          margin-left: 10px;
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 9;
        }

        .navigation .ul {
          // display: ${hamburgerOpen ? 'flex' : 'none'};
          // background-color: #f7f5f0;
          // height: 100vh;
          // width: 100vw;
          // position: absolute;
          // z-index: 8;
          // top: 0px;
          // left: 0px;
        }
        .sitelogo {
          padding-top: 15px;
          padding-left: 15px;
          position: relative;
          z-index: ${hamburgerOpen ? '10' : '1'};
          pointer-events: ${hamburgerOpen ? 'none' : 'auto'};
        }
        // .hamburger {
        //   display: none;
        //   z-index: 6;
        // }

        // @media (max-width: 767px) {
        //   .hamburger {
        //     display: fixed;
        //     padding-top: 10px;
        //     margin-left: 10px;
        //     z-index: 6;
        //   }

        //   .navigation ul {
        //     display: ${hamburgerOpen ? 'inline' : 'none'};
        //     background-color: blue;
        //     height: 100vh;
        //     width: 50vw;
        //     margin-top: 50px;
        //     position: fixed;
        //   }
        // }
      `}</style>
    </>
  )
}
