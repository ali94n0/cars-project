import BackBtn from "@/components/modules/backBtn/BackBtn";
import Card from "@/components/modules/card/Card";
import CarsFilter from "@/components/templates/carsFilter/CarsFilter";
import carsData from "@/data/carsDB";
import { useRouter } from "next/router";

function filterPricePage(props) {
  const router = useRouter();
  const slugs = router.query.slug || [];

  const filteredCars = carsData.filter(
    (car) => car.price >= slugs[0] && car.price <= slugs[1]
  );

  return (
    <div>
      <CarsFilter data={filteredCars} route={router} />
    </div>
  );
}

export default filterPricePage;
