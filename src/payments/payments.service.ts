import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/db/db.service";
import {
  PaymentOrderByWithRelationInput,
  PaymentWhereInput,
} from "src/---generated---";

@Injectable()
export class PaymentsService {
  constructor(private readonly db: DatabaseService) {}
  async getAllPayments(
    where?: PaymentWhereInput,
    take?: number,
    skip?: number,
    orderBy?: PaymentOrderByWithRelationInput
  ) {
    return this.db.payment.findMany({ where, take, skip, orderBy });
  }
}
