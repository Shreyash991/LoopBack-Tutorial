import {Entity, model, property} from '@loopback/repository';

@model()
export class Book extends Entity {
  @property({
    type: 'number',
    id: true,  // Marks this property as the primary key
    generated: true,  // Optionally, if it's auto-generated by the database
  })
  id: number;  

  @property({
    type: 'number',
  })
  yearPublished?: number;
  
  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  author?: string;

  @property({
    type: 'string',
  })
  publishedDate?: string;


  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
