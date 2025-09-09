import { Query, Resolver } from "@nestjs/graphql";
import { DemoService } from "./demo.service";

@Resolver("Demo")
export class DemoResolver {
  constructor(private readonly demoService: DemoService) {}
  @Query(() => String)
  ping(): string {
    return "pong";
  }
}
