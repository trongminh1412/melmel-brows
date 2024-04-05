import arrow from "@/public/assets/images/icon/arrow.png"
import bg from "@/public/assets/images/page1/background2.png"
import Image from "next/image"

const Discount = () => {
  return (
    <div>
        <div>
        <Image src={bg} alt="" />
    </div>
    <div className='flex items-center gap-4 text-center justify-center bg-brown-200 py-8 mt-[-1rem]'>
        <h2 className='text-brown-100 text-28px font-bold underline 1024px:text-20px'>Đăng ký ngay</h2>
        <Image src={arrow} alt="" />
    </div>
    </div>
  )
}

export default Discount