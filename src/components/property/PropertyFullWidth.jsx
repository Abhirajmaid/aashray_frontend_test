import { useSelector } from "react-redux";
import { dataStore } from "../../features/dataSlice";
import SingleProductCardFullWidth from "../common/page-componets/SingleProductCardFullWidth";
const PropertyFullWidth = () => {
  const { currentDataItems } = useSelector(dataStore);
  return (
    <div>
      {currentDataItems?.map((property) => (
        <SingleProductCardFullWidth key={property.id} {...property} />
      ))}
    </div>
  );
};

export default PropertyFullWidth;
