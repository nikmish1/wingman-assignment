import { orders } from "../../../data/orders";

export async function GET(): Promise<Response> {
  return Response.json(orders);
}
