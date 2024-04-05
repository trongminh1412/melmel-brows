import line from "@/public/assets/images/icon/line.png"
import Image from "next/image"

const TitleComponent = (props: any) => {
  return (
   <div>
<section className="w-full mx-auto mb-24 max-w-screen-xl">
        <div className="relative">
            <h2 className='lg:text-6xl font-bold text-dark-100 text-center sm:text-4xl md:text-5xl uppercase'>{props.title1} </h2>
            <h2 className='lg:text-6xl font-bold text-dark-100 text-center sm:text-4xl md:text-5xl uppercase'>{props.title2}</h2>
            <div className="absolute bottom-[-10%] left-[50%] translate-x-[-50%] ">
                <Image src={line} alt="" />
            </div>
        </div>
       
    </section>

   </div>
  )
}

export default TitleComponent