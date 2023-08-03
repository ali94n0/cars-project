import AllCarsBtn from "@/components/modules/allCarsBtn/AllCarsBtn";
import Categories from "@/components/modules/categories/Categories";
import SearchBar from "@/components/modules/searchBar/SearchBar";
import CarsPage from "@/components/templates/cars/CarsPage";
import carsData from "@/data/carsDB";

export default function Home() {
  const selectedCars = carsData.slice(-3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllCarsBtn />
      <CarsPage data={selectedCars} />
    </div>
  );
}
