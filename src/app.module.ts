import { Module } from '@nestjs/common';
import { RankingsModule } from './rankings/rankings.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RankingsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      'mongodb+srv://thiagofdias2:eDMr2a5byleD2RFL@cluster.cjc37.mongodb.net/srranking?retryWrites=true&w=majority&appName=Cluster',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
