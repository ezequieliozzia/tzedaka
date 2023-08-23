const ProfileService = {
  fetchData: async () => {
    const response = await fetch("/api/getUser", {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    return data.records;
  },
  fetchProfileInfo: async (email) => {
    const response = await fetch("/api/contactInfo", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    const data = await response.json();
    return data;
  },
};

export default ProfileService;
