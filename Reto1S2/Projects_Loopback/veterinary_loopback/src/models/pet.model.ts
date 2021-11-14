import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Owner} from './owner.model';

@model()
export class Pet extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  animal_type: string;

  @property({
    type: 'string',
    required: true,
  })
  breed: string;

  @property({
    type: 'date',
    required: true,
  })
  date_born: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @belongsTo(() => Owner)
  ownerId: string;

  constructor(data?: Partial<Pet>) {
    super(data);
  }
}

export interface PetRelations {
  // describe navigational properties here
}

export type PetWithRelations = Pet & PetRelations;
