import Head from "next/head";
import NewsLetterRegistration from "../components/input/NewsLetterRegistration";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";
const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find events that allow you to evolve!"
        />
      </Head>
      <NewsLetterRegistration />
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    // every 30 min events re-generated
    revalidate: 1800,
  };
}

export default HomePage;
