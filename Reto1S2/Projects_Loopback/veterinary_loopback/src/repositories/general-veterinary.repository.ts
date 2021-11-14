import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {GeneralVeterinary, GeneralVeterinaryRelations} from '../models';

export class GeneralVeterinaryRepository extends DefaultCrudRepository<
  GeneralVeterinary,
  typeof GeneralVeterinary.prototype.id,
  GeneralVeterinaryRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(GeneralVeterinary, dataSource);
  }
}
