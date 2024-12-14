import React, { useState } from "react";
import EventForm from "./component/eventform";
import EventList from "./component/eventlist";


const App = () => {
  const [events, setEvents] = useState([]); // Store event data
  const [selectedEvent, setSelectedEvent] = useState(null); // For editing events

  // Add or update event
  const saveEvent = (event) => {
    if (event.id) {
      // Edit existing event
      setEvents((prev) =>
        prev.map((e) => (e.id === event.id ? event : e))
      );
    } else {
      // Add new event
      setEvents((prev) => [...prev, { ...event, id: Date.now() }]);
    }
    setSelectedEvent(null);
  };

  // Delete an event
  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.container}>Event Manager</h1>
      <EventForm
        saveEvent={saveEvent}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />
      <EventList
        events={events}
        setSelectedEvent={setSelectedEvent}
        deleteEvent={deleteEvent}
      />
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2023/04/arbitrum-gID_1.jpg@webp')",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    color: "green"
  },
};

export default App;
