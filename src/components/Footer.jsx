import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return(
    <footer className="bg-charcoal text-light_teal font-dm_sans py-[60px] flex justify-center items-center text-xs xxs:text-sm">
      <div className="w-[290px] xxs:w-[315px] flex flex-col items-start gap-[30px] sm:w-[580px] lg:w-[800px] xhd:w-[1000px] fullhd:w-[1120px]">
        <div className="flex flex-col gap-[30px] w-full lg:flex-row lg:justify-between">
          <Image src="/icons/footer/logo.svg" width="200" height="70" alt="logo"/>
          <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 font-normal">
            <div className="flex gap-4 items-center">
              <Image src="/icons/footer/ubication.svg" width="24" height="24" alt="ubication" />
              <p>San Isidro, Buenos Aires</p>
            </div>
            <div className="flex gap-4 items-center">
              <Image src="/icons/footer/phone.svg" width="24" height="24" alt="phone" />
              <p>11 3923-4253</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <p className="hidden sm:block font-medium opacity-50">Redes</p>
            <Image src="/icons/footer/facebook.svg" width="24" height="24" alt="facebook" className="cursor-pointer" />
            <Image src="/icons/footer/x.svg" width="24" height="24" alt="x" className="cursor-pointer" />
            <Image src="/icons/footer/linkedin.svg" width="24" height="24" alt="linkedin" className="cursor-pointer" />
            <Image src="/icons/footer/youtube.svg" width="24" height="24" alt="youtube" className="cursor-pointer" />
            <Image src="/icons/footer/instagram.svg" width="24" height="24" alt="instagram" className="cursor-pointer" />
          </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 sm:items-center lg:items-start">
          <hr className="sm:w-[580px] lg:w-[800px] xhd:w-[1000px] fullhd:w-[1120px]" />
          <div className="flex justify-between font-medium sm:w-[386px]">
            <Link href='/ingresar'>INGRESAR</Link>
            <Link href='/contacto'>CONTACTO</Link>
            <Link href='/catalogo'>CATÁLOGO</Link>
            <Link href='/ayuda'>AYUDA</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;