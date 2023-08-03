import { useRouter } from "next/router";
import CarDetails from "../../components/templates/carDetails/CarDetails";
import Back from "@/components/icons/Back";
import BackBtn from "@/components/modules/backBtn/BackBtn";

function CarDetailsPage(props) {
  const router = useRouter();
  const id = router.query.carId;

  const clickHandler = () => {
    router.back();
  };

  return (
    <div>
      <BackBtn route={router} />
      <CarDetails id={id} />
    </div>
  );
}

export default CarDetailsPage;
