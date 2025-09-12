import { Module } from "@nestjs/common";
import { ProductListingsService } from "./product-listings.service";
import { ProductListingsResolver } from "./product-listings.resolver";

@Module({
  providers: [ProductListingsResolver, ProductListingsService],
})
export class ProductListingsModule {}
