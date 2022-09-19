import { CloseCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const css = { width: '50%', height: 'auto' }
export const CardProduct1 = () => (
  <Link href="#">
    <a className="card card-compact bg-base-100 shadow-xl relative">
      <CloseCircleOutlined className="absolute z-10 top-3 right-3 bg-white p-1 rounded-md" style={{ fontSize: '20px' }} />
      <figure ><Image src="https://placeimg.com/400/225/arch" layout="responsive" objectFit="cover" alt="Shoes" width="500" height="500" /></figure>
      {/* <figure ><Image src="https://placeimg.com/400/225/arch" layout="fill" alt="Shoes" sizes="100vw" style={css}/></figure> */}
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        {/* <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div> */}
      </div>
    </a>
  </Link>
)