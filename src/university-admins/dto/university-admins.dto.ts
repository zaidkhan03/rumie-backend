import { Field, ID, InputType } from "@nestjs/graphql";
import { IsEmail, IsUUID } from "class-validator";

@InputType()
export class CreateAdminInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class FindAdminByIdInput {
  @Field(() => ID)
  @IsUUID("4", { message: "id must be a valid UUID" })
  id: string;
}
@InputType()
export class FindAdminByEmailInput {
  @Field(() => String)
  @IsEmail()
  email: string;
}
