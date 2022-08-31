import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";
const HomePage = (props) => {
  return (
    <div>
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
