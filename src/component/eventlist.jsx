import React, { useState } from "react";

const EventList = ({ events, setSelectedEvent, deleteEvent }) => {
  const [participants, setParticipants] = useState([]); // State to manage participants
  const [showParticipants, setShowParticipants] = useState(null); // Track which event's participants to display
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  // Example random participants (replace with actual data if available)
  const randomParticipants = [
    "John Doe",
    "Jane Smith",
    "Michael Brown",
    "Emily White",
    "Chris Johnson",
    "Linda Lee",
  ];

  const handleViewParticipants = (eventId) => {
    // Generate a random list of participants
    const shuffled = randomParticipants.sort(() => 0.5 - Math.random());
    setParticipants(shuffled.slice(0, 3)); // Display 3 participants for the event
    setShowParticipants(eventId); // Identify which event's participants are being shown
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowParticipants(null); // Reset state
  };

  return (
    <div style={styles.list}>
      {events.length === 0 ? (
        <p>No events yet. Start by adding one!</p>
      ) : (
        events.map((event) => (
          <div key={event.id} style={styles.eventCard}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <button
              style={styles.button}
              onClick={() => setSelectedEvent(event)}
            >
              Edit
            </button>
            <button
              style={styles.deleteButton}
              onClick={() => deleteEvent(event.id)}
            >
              Delete
            </button>
            <button
              style={styles.participantsButton}
              onClick={() => handleViewParticipants(event.id)}
            >
              View Participants
            </button>

            {showParticipants === event.id && isModalOpen && (
              <div style={styles.modalOverlay}>
                <div style={styles.modal}>
                  <h4>Participants:</h4>
                  <ul>
                    {participants.map((participant, index) => (
                      <li key={index}>{participant}</li>
                    ))}
                  </ul>
                  <button style={styles.closeButton} onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
    list: {
      marginTop: "20px",
    },
    eventCard: {
      border: "1px solid #ddd",
      padding: "15px",
      marginBottom: "10px",
      borderRadius: "5px",
    },
    button: {
      marginRight: "10px",
      padding: "5px 10px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    deleteButton: {
      marginRight: "10px", // Add margin-right to create spacing
      padding: "5px 10px",
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    participantsButton: {
      padding: "5px 10px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modal: {
      backgroundImage: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "300px",
      textAlign: "center",
    },
    closeButton: {
      marginTop: "15px",
      padding: "5px 10px",
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    participantsList: {
      marginTop: "10px",
      padding: "10px",
      backgroundColor: "#f8f9fa",
      borderRadius: "5px",
    },
  };
  
export default EventList;
