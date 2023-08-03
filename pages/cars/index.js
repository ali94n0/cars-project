import carsData from "../../data/carsDB";
import CarsPage from "../../components/templates/cars/CarsPage";
import Categories from "@/components/modules/categories/Categories";

function index(props) {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default index;
