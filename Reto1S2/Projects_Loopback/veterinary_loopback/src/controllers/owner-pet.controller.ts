import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Owner,
  Pet,
} from '../models';
import {OwnerRepository} from '../repositories';

export class OwnerPetController {
  constructor(
    @repository(OwnerRepository) protected ownerRepository: OwnerRepository,
  ) { }

  @get('/owners/{id}/pets', {
    responses: {
      '200': {
        description: 'Array of Owner has many Pet',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pet)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Pet>,
  ): Promise<Pet[]> {
    return this.ownerRepository.pets(id).find(filter);
  }

  @post('/owners/{id}/pets', {
    responses: {
      '200': {
        description: 'Owner model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pet)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Owner.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pet, {
            title: 'NewPetInOwner',
            exclude: ['id'],
            optional: ['ownerId']
          }),
        },
      },
    }) pet: Omit<Pet, 'id'>,
  ): Promise<Pet> {
    return this.ownerRepository.pets(id).create(pet);
  }

  @patch('/owners/{id}/pets', {
    responses: {
      '200': {
        description: 'Owner.Pet PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pet, {partial: true}),
        },
      },
    })
    pet: Partial<Pet>,
    @param.query.object('where', getWhereSchemaFor(Pet)) where?: Where<Pet>,
  ): Promise<Count> {
    return this.ownerRepository.pets(id).patch(pet, where);
  }

  @del('/owners/{id}/pets', {
    responses: {
      '200': {
        description: 'Owner.Pet DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Pet)) where?: Where<Pet>,
  ): Promise<Count> {
    return this.ownerRepository.pets(id).delete(where);
  }
}
