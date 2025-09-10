import { Module } from "@nestjs/common";
import { ProductListingsService } from "./product-listings.service";
import { ProductListingsResolver } from "./product-listings.resolver";
import { DataBaseModule } from "src/db/db.module";

@Module({
  providers: [ProductListingsResolver, ProductListingsService],
  imports: [DataBaseModule],
})
export class ProductListingsModule {}
