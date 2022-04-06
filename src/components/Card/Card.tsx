import { Location } from "../../types/locations";
import Tag from "../Tag/Tag";
import style from "./card.module.scss";
interface CardProps {
  location: Location;
  refs?: React.LegacyRef<HTMLDivElement> | undefined | null;
}

const Card: React.FC<CardProps> = ({ location, refs }) => {
  return (
    <div className={style.card} ref={refs}>
      <h5>{location.locationName}</h5>
      <div className={style.cardBody}>
        <p>
          <b>Address Line 1:</b> {location.address.addressLine1}
        </p>
        <p>
          {location.address.addressLine2 && (
            <>
              <b>Address Line 2:</b> {location.address.addressLine2}
            </>
          )}
        </p>
      </div>
      <div className={style.cardBody}>
        <Tag text={location.address.city} />
        <Tag text={location.address.state} />
        <Tag text={location.address.zip} />
      </div>

      {location.locationDetails && (
        <div className={style.cardBody}>
          <p>{location.locationDetails}</p>
        </div>
      )}

      <div className={style.cardBody}>
        <p>
          <b>Latitude:</b> {location.latitude}
        </p>
        <p>
          <b>Longitude:</b>
          {location.longitude}
        </p>
      </div>

      <div className={style.cardBody}>
        <span>
          <b>Type:</b> <Tag text={location.locationType} />
        </span>
        <br />
        <span>
          <b>Location User Role:</b> <Tag text={location.locationUserRole} />
        </span>
        <br />
        <span>
          <b>Subscription Status:</b>
          <Tag text={location.subscriptionActive ? "Active" : "Inactive"} />
        </span>
      </div>
    </div>
  );
};

export default Card;
