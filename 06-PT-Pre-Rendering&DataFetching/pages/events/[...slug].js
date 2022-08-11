import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents, transformEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import useSWR from "swr";

//SSR Approach
// export default function FilteredEventsPage({ hasError, filteredEvents, d }) {
export default function FilteredEventsPage() {
  //client side fetching
  const [loadedEvents, setLoadedEvents] = useState();

  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const year = +filterData[0]; //+ transforms to numbers
  const month = +filterData[1];

  const { data, error } = useSWR(
    "https://nextjs-course-f25e2-default-rtdb.firebaseio.com/events.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (!data) return;

    setLoadedEvents(transformEvents(data));
  }, [data]);

  if (!loadedEvents) return <p className="center">Loading ...</p>;

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12 ||
    error
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  //SSR Approach
  // if (hasError) {
  //   return (
  //     <>
  //       <ErrorAlert>
  //         <p>Invalid filter. Please adjust your values!</p>
  //       </ErrorAlert>
  //       <div className="center">
  //         <Button link="/events">Show All Events</Button>
  //       </div>
  //     </>
  //   );
  // }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  //SSR Approach - Receive date from props
  // const date = new Date(d.year, d.month - 1);

  //CSR Approach - Receive date from router query
  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}

//SSR Approach
// export async function getServerSideProps(context) {
//   const { params } = context;
//   const filterData = params.slug;

//   const year = +filterData[0]; //+ transforms to numbers
//   const month = +filterData[1];

//   if (
//     isNaN(year) ||
//     isNaN(month) ||
//     year > 2030 ||
//     year < 2021 ||
//     month < 1 ||
//     month > 12
//   ) {
//     return {
//       // notFound: true,
//       // redirect: {
//       //   destination: "/error",
//       // },
//       props: {
//         hasError: true,
//       },
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year,
//     month,
//   });

//   return {
//     props: {
//       hasError: false,
//       filteredEvents,
//       d: {
//         year,
//         month,
//       },
//     },
//   };
// }
