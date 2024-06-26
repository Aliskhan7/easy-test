const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};
export async function themeFetch() {
  try {
    const response = await fetch(
      "https://logiclike.com/docs/courses.json",
      options,
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
