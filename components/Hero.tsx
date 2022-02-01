import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faTruck,
  faTruckLoading,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Hero() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden">
      <div
        className={`absolute top-0 left-0 h-full w-full bg-[url('/assets/images/cover.webp')] bg-cover bg-center    `}
      ></div>
      <div className="absolute top-[15vh] left-0 h-[60vh] w-full skew-y-6 bg-[#71DFE7] bg-opacity-80 mix-blend-color sm:skew-y-12 sm:mix-blend-soft-light"></div>
      <div
        className={`absolute top-0 left-0 h-full w-full bg-opacity-100 bg-gradient-to-b from-black via-transparent to-black mix-blend-darken`}
      ></div>

      <div className="relative flex h-screen flex-col items-center justify-center ">
        <div className="h-1/3  w-full flex-initial ">
          <div className=" flex flex-row items-center justify-start p-10">
            <div>
              <p className="font-Raleway text-3xl text-white  sm:text-4xl">
                LogiStore
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-full w-auto flex-auto flex-col items-center justify-center   ">
          <h1 className="flex flex-col pb-1 ">
            <span className=" font-Raleway text-xl uppercase text-white sm:text-4xl font-thin">
              We Mastered
            </span>
            <span className="font-Raleway text-6xl font-bold uppercase text-white sm:text-9xl">
              LOGISTICS
            </span>
          </h1>
          <p className="flex w-full flex-row justify-evenly rounded-sm bg-white py-1 text-center font-Raleway  uppercase  text-black bg-blend-exclusion ">
            Because you deserve the best
          </p>
        </div>

        <div className=" flex  h-1/3 w-full flex-initial items-center justify-center ">
          <div className=" mx-auto flex flex-row justify-evenly  rounded-sm px-4 font-Oswald  text-lg  font-bold  text-white sm:mt-auto sm:bg-white  sm:bg-opacity-60 sm:font-Oswald  sm:text-black ">
            <div className="m-2 flex flex-col items-center sm:flex-row">
              <FontAwesomeIcon className="mx-5 h-8 w-8" icon={faTruckLoading} />
              <p className="text-center">Handling</p>
            </div>
            <div className="m-2 flex flex-col items-center sm:flex-row">
              <FontAwesomeIcon className="mx-5 h-8 w-8" icon={faWarehouse} />
              <p className="text-center">Store</p>
            </div>
            <div className="m-2 flex flex-col items-center sm:flex-row">
              <FontAwesomeIcon className="mx-5 h-8 w-8 " icon={faTruck} />
              <p className="text-center">Transport</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center px-10 py-5 sm:justify-end">
          <ul className="  flex   list-none flex-row font-RobotoC text-lg font-thin uppercase text-white ">
            <li className="mx-2 list-item h-5 w-5">
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li className="mx-2 list-item h-5 w-5">
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li className="mx-2 list-item h-5 w-5">
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li className="mx-2 list-item h-5 w-5">
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li className="mx-2 list-item h-5 w-5">
              <FontAwesomeIcon icon={faGooglePlus} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
