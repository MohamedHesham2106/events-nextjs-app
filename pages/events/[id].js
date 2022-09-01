import { Fragment } from "react";
import Comments from "../../components/input/Comments";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/events detail/EventSummary";
import EventLogistics from "../../components/events detail/EventLogistics";
import EventContent from "../../components/events detail/EventContent";
import ErrorAlert from "../../components/ui/ErrorAlert";
import Head from "next/head";

const EventDetailPage = (props) => {
  const event = props.event;
  const { hasError } = props;
  if (hasError) {
    return (
      <ErrorAlert>
        <p>No Events Found!</p>
      </ErrorAlert>
    );
  }
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.id;

  const event = await getEventById(eventId);

  if (!event) {
    return { props: { hasError: true } };
  }
  return {
    props: {
      event: event,
    },
    revalidate: 30,
  };
}
export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { id: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetailPage;
