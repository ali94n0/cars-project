import { useRouter } from "next/router";
import CarDetails from "../../components/templates/carDetails/CarDetails";

function CarDetailsPage(props) {
  const router = useRouter();
  const id = router.query.carId;

  return (
    <div>
      <CarDetails id={id} />
    </div>
  );
}

export default CarDetailsPage;
