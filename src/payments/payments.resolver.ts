import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { PaymentsService } from "./payments.service";
import {
  Payment,
  PaymentOrderByWithRelationInput,
  PaymentWhereInput,
} from "src/---generated---";

@Resolver("Payment")
export class PaymentsResolver {
  constructor(private readonly paymentsService: PaymentsService) {}
  @Query(() => [Payment])
  async payments(
    @Args("where", { nullable: true }) where?: PaymentWhereInput,
    @Args("take", { type: () => Int, nullable: true }) take?: number,
    @Args("skip", { type: () => Int, nullable: true }) skip?: number,
    @Args("orderBy", { nullable: true })
    orderBy?: PaymentOrderByWithRelationInput
  ) {
    console.log({ where, take, skip, orderBy });
    return this.paymentsService.getAllPayments(where, take, skip, orderBy);
  }
}
