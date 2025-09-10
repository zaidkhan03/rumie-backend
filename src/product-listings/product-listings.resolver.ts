import { Args, Query, Resolver, Int } from "@nestjs/graphql";
import { ProductListingsService } from "./product-listings.service";
import {
  ProductListing,
  ProductListingOrderByWithRelationInput,
  ProductListingWhereInput,
} from "src/---generated---";

@Resolver()
export class ProductListingsResolver {
  constructor(
    private readonly productListingsService: ProductListingsService
  ) {}

  @Query(() => [ProductListing])
  async productListings(
    @Args("where", { nullable: true }) where?: ProductListingWhereInput,
    @Args("take", { type: () => Int, nullable: true }) take?: number,
    @Args("skip", { type: () => Int, nullable: true }) skip?: number,
    @Args("orderBy", { nullable: true })
    orderBy?: ProductListingOrderByWithRelationInput
  ) {
    return this.productListingsService.getAllProductListings(
      where,
      take,
      skip,
      orderBy
    );
  }
}
