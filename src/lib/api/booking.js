import { rooms } from "@/lib/data/site";

export async function getRooms(){ return rooms; }
export async function checkAvailability(query) {
  const availableRooms = rooms.filter((r) => r.capacity >= query.guests);
  await new Promise((r) => setTimeout(r, 400));
  return { query, availableRooms };
}