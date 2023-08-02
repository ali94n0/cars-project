import carsData from "../../data/carsDB";
import CarsPage from "../../components/templates/cars/CarsPage";

function index(props) {
  return (
    <div>
      <CarsPage data={carsData} />
    </div>
  );
}

export default index;
