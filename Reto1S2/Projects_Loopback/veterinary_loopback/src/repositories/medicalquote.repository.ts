import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Medicalquote, MedicalquoteRelations} from '../models';

export class MedicalquoteRepository extends DefaultCrudRepository<
  Medicalquote,
  typeof Medicalquote.prototype.id,
  MedicalquoteRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Medicalquote, dataSource);
  }
}
