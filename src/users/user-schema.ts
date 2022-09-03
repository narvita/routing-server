import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  birthYear: number;

  @Prop()
  amount: string;

  @Prop()
  due: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
