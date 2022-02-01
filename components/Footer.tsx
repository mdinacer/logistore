import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="relative flex h-full min-h-[30vh] w-full flex-row items-center  justify-center bg-[#232931] py-10 text-white">
      <div className=' absolute top-0 left-0 h-full w-full bg-[url("https://pixel-industry.com/wordpress/trucking/wp-content/themes/trucking/img/footer-bkg.png")] bg-cover bg-center mix-blend-screen' />

      <div className="relative grid grid-flow-row grid-cols-1 gap-5 sm:grid-cols-3 sm:grid-rows-1">
        <div className="mx-auto flex h-full w-full max-w-sm items-center justify-center p-5">
          <div className=" h-auto w-auto  font-Oswald">
            <p className=" text-2xl leading-loose">Address</p>
            <p className="m my-1 font-RobotoC text-lg font-thin">
              <span className="font-bold">UK: </span>
              <span>483 High Street WEST LONDON W41 6PR</span>
            </p>
            <p className="m font-RobotoC text-lg font-thin">
              <span className="font-bold">US: </span>
              <span>7841 Tanglewood Dr. San Francisco, CA</span>
            </p>
          </div>
        </div>

        <div className="mx-auto flex h-full w-full max-w-sm items-center justify-start p-5  sm:justify-center">
          <div className=" h-auto w-auto  font-Oswald">
            <p className="text-2xl leading-loose">Contact</p>
            <Link href={'tel:+213662991735'}>
              <p className="my-1 cursor-pointer font-RobotoC text-lg font-thin">
                <span className="font-bold">Phone: </span>
                <span>+213 662 991 735</span>
              </p>
            </Link>
            <Link href="mailto:mdi.nacer@outlook.com">
              <p className="cursor-pointer font-RobotoC text-lg font-thin">
                <span className="font-bold">Email: </span>
                <span className=" cursor-pointer">mdi.nacer@outlook.com</span>
              </p>
            </Link>
          </div>
        </div>

        <div className=" flex h-full w-full max-w-sm items-center justify-start p-5 sm:justify-center">
          <div className=" h-auto w-auto  font-Oswald">
            <p className="text-2xl leading-loose">Follow Us</p>
            <div className="flex w-full items-center justify-center  py-5 sm:justify-end">
              <ul className="  flex   list-none flex-row font-RobotoC text-lg font-thin uppercase text-white ">
                <li className="mx-2 list-item h-7 w-7 ">
                  <Link href={'https://www.facebook.com/mdi.nacer.5'} passHref>
                    <a target={'_blank'} rel="noreferrer">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </Link>
                </li>
                <li className="mx-2 list-item h-7 w-7 ">
                  <Link href={'https://www.instagram.com/poyzonous/'} passHref>
                    <a target={'_blank'} rel="noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </Link>
                </li>
                <li className="mx-2 list-item h-7 w-7 ">
                  <Link
                    href={'https://www.linkedin.com/in/mohammedi-abdenasser/'}
                    passHref
                  >
                    <a target={'_blank'} rel="noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </Link>
                </li>
                <li className="mx-2 list-item h-7 w-7">
                  <Link href={'https://twitter.com/MohammediAbden2'} passHref>
                    <a target={'_blank'} rel="noreferrer">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
