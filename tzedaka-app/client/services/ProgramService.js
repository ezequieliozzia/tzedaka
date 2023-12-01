const ProgramService = {
  getChildren: async (program) => {
    const params = new URLSearchParams({
      program: program,
    });
    const response = await fetch("/api/beneficiaries?" + params, {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    return data.ahijados;
  },
};

export default ProgramService;
