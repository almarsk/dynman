const getData = async () => {
  const response = await fetch("http://127.0.0.1:5000");
  if (!response.ok) {
    throw new Error("Failed to fetch directory content");
  }
  try {
    return await response.json();
  } catch {
    console.error("Error fetching content.");
  }
};

export default getData;
