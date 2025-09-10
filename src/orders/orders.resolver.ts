import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { OrdersService } from "./orders.service";
import {
  Order,
  OrderOrderByWithRelationInput,
  OrderWhereInput,
} from "src/---generated---";

@Resolver("Order")
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => [Order])
  async orders(
    @Args("where", { nullable: true }) where?: OrderWhereInput,
    @Args("take", { type: () => Int, nullable: true }) take?: number,
    @Args("skip", { type: () => Int, nullable: true }) skip?: number,
    @Args("orderBy", { nullable: true })
    orderBy?: OrderOrderByWithRelationInput
  ) {
    return this.ordersService.getAllOrders(where, take, skip, orderBy);
  }
}
