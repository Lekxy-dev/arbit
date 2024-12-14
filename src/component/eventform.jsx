import React, { useState, useEffect } from "react";

const EventForm = ({ saveEvent, selectedEvent, setSelectedEvent }) => {
  const [event, setEvent] = useState({ title: "", description: "", date: "" });

  useEffect(() => {
    if (selectedEvent) {
      setEvent(selectedEvent);
    } else {
      setEvent({ title: "", description: "", date: "" });
    }
  }, [selectedEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!event.title || !event.date) {
      alert("Title and Date are required!");
      return;
    }
    saveEvent(event);
    setEvent({ title: "", description: "", date: "" });
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={event.title}
        onChange={(e) => setEvent({ ...event, title: e.target.value })}
        required
        style={styles.input}
      />
      <textarea
        placeholder="Description"
        value={event.description}
        onChange={(e) => setEvent({ ...event, description: e.target.value })}
        style={styles.textarea}
      />
      <input
        type="date"
        value={event.date}
        onChange={(e) => setEvent({ ...event, date: e.target.value })}
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        {selectedEvent ? "Update Event" : "Add Event"}
      </button>
      {selectedEvent && (
        <button
          type="button"
          onClick={() => setSelectedEvent(null)}
          style={styles.cancelButton}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

const styles = {
  form: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    marginLeft: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#ccc",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default EventForm;
