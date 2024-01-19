import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Place, PlaceSchema } from './entities/place.entity';
import { City, CitySchema } from './entities/city.entity';
import { Country, CountrySchema } from './entities/country.entity';
import { ExplorerController } from './explorer.controller';
import { ExplorerService } from './explorer.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [ExplorerController],
  providers: [ExplorerService],
  imports: [
    MongooseModule.forFeature([{
      name: Place.name,
      schema: PlaceSchema
    },
    {
      name: Country.name,
      schema: CountrySchema
    },
    {
      name: City.name,
      schema: CitySchema
    }
  ])
  ],
  exports: [MongooseModule]
})
export class ExplorerModule {}
