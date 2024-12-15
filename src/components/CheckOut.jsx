import Breadcrumb from "./Breadcrumb";
import Stepper from "./Stepper";
import breadcrumbsData from "../data/breadcrumbs.json";
import ProductShipment from "./ProductShipment";
const CheckOut = () => {
  return (
    <section className="flex justify-center items-center py-[50px] lg:py-[100px]">
      <div className="flex flex-col justify-center items-center gap-y-[40px] w-[299px] sm:w-[580px] lg:w-[851px] xl:w-[980px] xhd:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
        <Breadcrumb breadcrumbs={breadcrumbsData.breadcrumbs} />
        <div className="flex gap-[50px]">
          <div className="flex flex-col items-center">
            <Stepper />
          </div>
          <div className="hidden lg:flex flex-col justify-start items-start">
            <ProductShipment />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
