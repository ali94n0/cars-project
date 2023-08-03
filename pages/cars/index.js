import carsData from "../../data/carsDB";
import CarsPage from "../../components/templates/cars/CarsPage";
import Categories from "@/components/modules/categories/Categories";
import SearchBar from "@/components/modules/searchBar/SearchBar";

function index(props) {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default index;
