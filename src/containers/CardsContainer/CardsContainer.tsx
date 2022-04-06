import React, { useCallback, useEffect, useRef, useState } from "react";
import { axiosInstance } from "../../api/baseUrl";
import { Container, Card, Spinner } from "../../components";

import { LocationResponse } from "../../types/locations";
import style from "./cardsContainer.module.scss";
const CardsContainer: React.FC = () => {
  const [data, setData] = useState<LocationResponse>({
    locations: [],
    numberOfLocations: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [body, setBody] = useState({
    start: 0,
    limit: 3,
  });
  const getLocations = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.post(`/confidence/locations`, body);
      setData((prev) => ({
        locations: [...prev.locations, ...data.locations],
        numberOfLocations: data.numberOfLocations,
      }));
      setIsLoading(false);
    } catch (error) {
      console.log("error :>> ", error);
    }
  }, [body]);

  // Get more on scroll
  let observer = useRef<any>(null);
  const lastCardNode = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // get more data
          if (data.numberOfLocations >= body.start) {
            setBody((prev) => ({ ...prev, start: (body.start += 3) }));
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [data]
  );

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  return (
    <Container>
      <div className={style.CardsContainer}>
        {data?.locations && (
          <>
            {data?.locations.map((location, index) => {
              if (data.locations.length === index + 1) {
                return (
                  <Card
                    refs={lastCardNode}
                    key={location.id}
                    location={location}
                  />
                );
              } else {
                return <Card key={location.id} location={location} />;
              }
            })}
          </>
        )}

        {(data?.locations.length === 0 || isLoading) && (
          <div className={style.spinner}>
            <Spinner />
          </div>
        )}
      </div>
    </Container>
  );
};

export default CardsContainer;
