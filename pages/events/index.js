import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const AllEventsPage = (props) => {
  const { events } = props;
  const router = useRouter();

  const findEventHandler = (year, month) => {
    // trigger slug file as it have more than one nested route
    const path = `/events/${year}/${month}`;
    router.push(path);
  };

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find events that allow you to evolve!"
        />
      </Head>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};
export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
export default AllEventsPage;
