export type ScheduleEntry = {
  label: string;
  hours: string;
};

export type RestaurantInfo = {
  delivery: {
    schedule: ScheduleEntry[];
    estimatedDelivery: string;
  };
  contact: {
    allergyNote: string;
    phone: string;
    website: string;
  };
  operational: {
    schedule: ScheduleEntry[];
  };
};
