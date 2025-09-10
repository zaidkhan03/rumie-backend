import { Injectable } from "@nestjs/common";
import {
  ProductListingOrderByWithRelationInput,
  ProductListingWhereInput,
} from "src/---generated---";
import { DatabaseService } from "src/db/db.service";

@Injectable()
export class ProductListingsService {
  constructor(private readonly db: DatabaseService) {}
  async getAllProductListings(
    where?: ProductListingWhereInput,
    take?: number,
    skip?: number,
    orderBy?: ProductListingOrderByWithRelationInput
  ) {
    return this.db.productListing.findMany({
      include: {
        uploader: true,
      },
      where: {
        ...where,
        uploaderId: {
          isSet: true,
        },
      },
      skip,
      take,
      orderBy,
    });
  }
}
