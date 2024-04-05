import line from "@/public/assets/images/icon/line.png"
import Image from "next/image"

const TitleComponent = (props: any) => {
  return (
   <div>
<section className="w-full mx-auto mb-16 max-w-screen-xl">
        <div className="relative">
            <h2 className='text-7xl font-bold text-dark-100 text-center'>{props.title1} </h2>
            <h2 className='text-7xl font-bold text-dark-100 text-center'>{props.title2}</h2>
            <div className="absolute bottom-[-10%] left-[50%] translate-x-[-50%] ">
                <Image src={line} alt="" />
            </div>
        </div>
       
    </section>

   </div>
  )
}

export default TitleComponent