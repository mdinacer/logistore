export default function Services() {
  return (
    <div className="relative h-full w-full  bg-gray-200 pt-20 ">
      <div className="flex w-full items-center justify-center  ">
        <h1 className="mb-7 font-Oswald text-3xl  uppercase sm:text-5xl ">
          What we offer
        </h1>
      </div>

      <div className="container mx-auto mb-20 grid grid-flow-row grid-cols-1 gap-10 py-5 px-10 sm:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex h-full w-full items-center justify-center"
          >
            <div className=" max-w-md">
              <p className=" pb-3 font-Oswald text-xl sm:text-3xl">
                {service.title}
              </p>
              <p className=" font-RobotoC text-base font-thin sm:text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate vel, rem ex ullam veniam ea.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-flow-row grid-cols-1 sm:grid-cols-2 sm:grid-rows-1">
        <div className="order-2 h-[50vh] w-full sm:order-1">
          <div
            className={`h-full w-full bg-[url('/assets/images/service1.webp')] bg-cover bg-center`}
          ></div>
        </div>

        <div className="order 1 flex h-full w-full items-center justify-center bg-[#2C394B] py-10 text-white sm:order-2">
          <div className="max-w-lg px-5  py-5  sm:py-0">
            <h2 className=" pb-3 font-Oswald text-3xl uppercase sm:text-5xl">
              Warehouses
            </h2>
            <p className="max-w-lg font-RobotoC text-lg font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio alias voluptatibus iure repellat at sequi? Expedita
              eaque, ipsum provident tempore iusto est quidem atque earum
              aspernatur, libero magnam voluptas officiis. Tempora, eius.
              Officia, illo? Eaque exercitationem assumenda quo quasi tenetur
              odit architecto qui fugiat deleniti odio, officiis ducimus
              voluptatibus sunt.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 ">
        <div className="flex h-full w-full items-center justify-center bg-[#2C394B] py-10 text-white ">
          <div className=" max-w-lg px-5  py-5  sm:py-0">
            <h2 className="pb-3 font-Oswald text-3xl uppercase sm:text-5xl ">
              Equipments & Tooling
            </h2>
            <p className=" font-RobotoC text-lg font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio alias voluptatibus iure repellat at sequi? Expedita
              eaque, ipsum provident tempore iusto est quidem atque earum
              aspernatur, libero magnam voluptas officiis. Tempora, eius.
              Officia, illo? Eaque exercitationem assumenda quo quasi tenetur
              odit architecto qui fugiat deleniti odio, officiis ducimus
              voluptatibus sunt.
            </p>
          </div>
        </div>

        <div className="h-[50vh] w-full">
          <div
            className={`h-full w-full bg-[url('/assets/images/service2.webp')] bg-cover bg-center`}
          ></div>
        </div>
      </div>

      <div className="grid grid-flow-row grid-cols-1 shadow-md shadow-black sm:grid-cols-2 sm:grid-rows-1 ">
        <div className="order-2 h-[50vh] w-full sm:order-1">
          <div
            className={`h-full w-full bg-[url('/assets/images/service3.webp')] bg-cover bg-center`}
          ></div>
        </div>

        <div className="order-1 flex h-full w-full items-center justify-center bg-[#2C394B] py-10 text-white sm:order-2">
          <div className="max-w-lg px-5  py-5  sm:py-0">
            <h2 className=" pb-3 font-Oswald text-3xl uppercase sm:text-5xl">
              Trucks
            </h2>
            <p className="max-w-lg font-RobotoC text-lg font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio alias voluptatibus iure repellat at sequi? Expedita
              eaque, ipsum provident tempore iusto est quidem atque earum
              aspernatur, libero magnam voluptas officiis. Tempora, eius.
              Officia, illo? Eaque exercitationem assumenda quo quasi tenetur
              odit architecto qui fugiat deleniti odio, officiis ducimus
              voluptatibus sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const services = [
  {
    title: 'Full Customized logistic services',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel, rem ex ullam veniam ea.',
  },
  {
    title: 'Modular storage units',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel, rem ex ullam veniam ea.',
  },
  {
    title: 'Secure and protected Warehouses',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel, rem ex ullam veniam ea.',
  },
  {
    title: 'Professional operators',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel, rem ex ullam veniam ea.',
  },
  {
    title: 'Load, Store and Deliver',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel, rem ex ullam veniam ea.',
  },
]
