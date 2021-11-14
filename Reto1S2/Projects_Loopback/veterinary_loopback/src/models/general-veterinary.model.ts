import {Entity, model, property} from '@loopback/repository';

@model()
export class GeneralVeterinary extends Entity {
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
  nit: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  website: string;


  constructor(data?: Partial<GeneralVeterinary>) {
    super(data);
  }
}

export interface GeneralVeterinaryRelations {
  // describe navigational properties here
}

export type GeneralVeterinaryWithRelations = GeneralVeterinary & GeneralVeterinaryRelations;
