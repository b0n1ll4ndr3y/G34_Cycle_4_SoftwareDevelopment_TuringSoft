import {Entity, model, property} from '@loopback/repository';

@model()
export class Medicalquote extends Entity {
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
  pet: string;

  @property({
    type: 'date',
    required: true,
  })
  datequote: string;

  @property({
    type: 'string',
    required: true,
  })
  timequote: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<Medicalquote>) {
    super(data);
  }
}

export interface MedicalquoteRelations {
  // describe navigational properties here
}

export type MedicalquoteWithRelations = Medicalquote & MedicalquoteRelations;
