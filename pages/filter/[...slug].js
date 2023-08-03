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
  if (!filteredCars.length)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BackBtn route={router} />
        <div
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            backgroundColor: "rgb(252, 90, 100)",
          }}
        >
          <p style={{ color: "#fff " }}>
            No Cars were Found in the Selected Price Range!
          </p>
        </div>
      </div>
    );

  return (
    <div>
      <CarsFilter data={filteredCars} route={router} />
    </div>
  );
}

export default filterPricePage;
