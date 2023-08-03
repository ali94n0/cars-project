import { useRouter } from "next/router";
import carsData from "@/data/carsDB";

import CarCategories from "@/components/templates/carCategories/CarCategories";

function CategoryPage(props) {
  const router = useRouter();
  const category = router.query.category;

  const filteredCars = carsData.filter((car) => car.category === category);

  return <CarCategories data={filteredCars} />;
}

export default CategoryPage;
