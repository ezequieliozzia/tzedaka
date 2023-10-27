const EventService = {
  getEvents: async () => {
    const response = await fetch("/api/events", {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    return data.eventos;
  },
};

export default EventService;
