import { RestaurantInfo } from "../types/restaurant-info.types";

export const restaurantInfo: RestaurantInfo = {
  delivery: {
    schedule: [
      {
        label: "Monday",
        hours: "12:00 AM–3:00 AM, 8:00 AM–3:00 AM",
      },
      { label: "Tuesday", hours: "8:00 AM–3:00 AM" },
      { label: "Wednesday", hours: "8:00 AM–3:00 AM" },
      { label: "Thursday", hours: "8:00 AM–3:00 AM" },
      { label: "Friday", hours: "8:00 AM–3:00 AM" },
      { label: "Saturday", hours: "8:00 AM–3:00 AM" },
      { label: "Sunday", hours: "8:00 AM–12:00 AM" },
    ],
    estimatedDelivery: "20 min",
  },
  contact: {
    allergyNote:
      "If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.",
    phone: "+934443-43",
    website: "http://mcdonalds.uk/",
  },
  operational: {
    schedule: [
      { label: "Monday", hours: "8:00 AM–3:00 AM" },
      { label: "Tuesday", hours: "8:00 AM–3:00 AM" },
      { label: "Wednesday", hours: "8:00 AM–3:00 AM" },
      { label: "Thursday", hours: "8:00 AM–3:00 AM" },
      { label: "Friday", hours: "8:00 AM–3:00 AM" },
      { label: "Saturday", hours: "8:00 AM–3:00 AM" },
      { label: "Sunday", hours: "8:00 AM–2:00 AM" },
    ],
  },
};
