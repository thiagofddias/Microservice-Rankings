import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'rankings' })
export class Ranking extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  challenge: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  player: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  match: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  category: string;

  @Prop()
  event: string;

  @Prop()
  operation: string;

  @Prop()
  points: string;
}

export const RankingSchema = SchemaFactory.createForClass(Ranking);
