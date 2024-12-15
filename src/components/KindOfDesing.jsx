import Image from "next/image";

const KindOfDesing = () => {
  return (
    <section className="flex flex-col justify-center items-center py-[50px]">
      <div className="flex flex-col w-[311px] sm:w-[580px] lg:w-[851px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
        <div className="flex flex-col gap-y-[30px] justify-center items-center">
          <h1 className="font-serif_display text-center text-[32px] leading-[46px] tracking-[8px] text-teal">
            ¿QUÉ TIPO DE DISEÑO NECESITAS?
          </h1>
          <p className="flex justify-center text-center text-[18px] leading-[26px] font-poppins text-dark_gray lg:w-[720px]">
            El sistema de placas decorativas ofrece dos opciones de instalación:
            módulos y placas continuas. Ambos tipos de placas están diseñados
            para ser fácilmente instalables, resistentes y adaptables a
            diferentes estilos de decoración.
          </p>

          <div className="flex flex-col gap-[50px] lg:flex-row">
            <div className="relative flex flex-col h-[400px] w-[311px] p-[30px] sm:w-full sm:p-[50px] lg:w-[400px] xl:w-[465px] hd:w-[493px] fullhd:w-[535px]">
              <Image
                src="/images/kind_of_desing/image_1.png"
                layout="fill"
                alt="kind of desing"
                priority
                className="object-cover sm:w-full absolute inset-0 z-0"
              />

              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <div className="relative z-20 flex flex-col justify-end h-full">
                <p className="font-poppins text-[24px] text-white sm:text-[46px]">
                  DISEÑOS
                </p>
                <p className="font-serif_display text-[40px] text-white sm:text-[64px] lg:text-[56px] xl:text-[64px]">
                  MODULARES
                </p>
                <p className="text-white font-poppins text-[14px] sm:text-[16px] lg:text-[14px] xl:text-base fullhd:w-[420px]">
                  PERMITEN UNA PERSONALIZACION VERSÁTIL, FACILITANDO LA CREACIÓN
                  DE PATRONES.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col h-[400px] w-[311px] p-[30px] sm:w-full sm:p-[50px] lg:w-[400px] xl:w-[465px] hd:w-[493px] fullhd:w-[535px]">
              <Image
                src="/images/kind_of_desing/image_1.png"
                layout="fill"
                alt="kind of desing"
                priority
                className="object-cover sm:w-full absolute inset-0 z-0"
              />

              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <div className="relative z-20 flex flex-col justify-end h-full">
                <p className="font-poppins text-[24px] text-white sm:text-[46px]">
                  DISEÑOS
                </p>
                <p className="font-serif_display text-[40px] text-white sm:text-[64px] lg:text-[56px] xl:text-[64px]">
                  CONTINUOS
                </p>
                <p className="text-white font-poppins text-[14px] sm:text-[16px] lg:text-[13px] xl:text-base">
                  PROPORCIONAN UNA APARIENCIA UNIFORME Y ELEGANTE, IDEAL PARA
                  SUPERFICIES AMPLIAS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KindOfDesing;
