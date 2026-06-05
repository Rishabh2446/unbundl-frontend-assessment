export const fetchTestimonials = async () => {
  const response = await fetch(
    "https://randomuser.me/api/?results=5"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch testimonials");
  }

  return response.json();
};