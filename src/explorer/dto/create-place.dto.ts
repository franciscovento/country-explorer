import { IsArray, IsNotEmpty, IsOptional, IsString, isMongoId } from "class-validator";

export class CreatePlaceDto {

  @IsNotEmpty()
  city_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsOptional()
  photos: string[];

  @IsString()
  @IsOptional()
  thumbnail: string;

  @IsString()
  @IsNotEmpty()
  address: string;

}