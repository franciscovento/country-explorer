import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Place extends Document {
  @Prop({
    required: true,
    index: true,
  })
  name: string;

  @Prop({
    required: true
  })
  description: string; 

  photos: string[];

  thumbnail: string;

  @Prop({
    required: true
  })
  address: string;

  @Prop({
    required: true
  })
  city_id: string;

}

export const PlaceSchema = SchemaFactory.createForClass(Place);