// src/api/services.js

// Backend API base URL
const API_URL = "http://localhost:5000/services"; // tumi server URL change korte paro

export const getServices = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch services");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
