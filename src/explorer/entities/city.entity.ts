import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class City extends Document {
  @Prop({
    required: true,
    index: true,
  })
  name: string;

  @Prop({
    required: true
  })
  country_id: string; 
}

export const CitySchema = SchemaFactory.createForClass(City);