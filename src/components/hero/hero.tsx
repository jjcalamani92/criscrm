import { MenuHeadless } from "../utils/headless/menu"
import { Button } from "../utils/next"

export const Hero = () => {
  return (
    <section className=" text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
          <span className="text-indigo-600">laborum doloribus</span>delectus
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
        <div className="flex flex-wrap justify-center">
          {/* <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-indigo-600 text-gray-50"></button> */}
          <Button label="Get started" type="primary" href="/dashboard"/>
          <Button label="Learn more" type="link" />
          {/* <MenuHeadless /> */}
          {/* <Dropdown /> */}
        </div>
      </div>
    </section>
  )
}