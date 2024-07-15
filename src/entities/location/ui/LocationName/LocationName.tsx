import { useLocationQuery } from "../../api/locationApi";
import styles from "./locationName.module.scss";

type LocationNameProps = {
  locationId: number;
};

export function LocationName(props: LocationNameProps) {
  const { locationId } = props;

  const { data: locations = [] } = useLocationQuery();

  const location = locations.find(
    (locationItem) => locationItem.id === locationId,
  );

  if (!location) return null;

  return <p className={styles.location}>{location.location}</p>;
}
