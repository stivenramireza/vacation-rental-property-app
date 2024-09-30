import { SelectQueryBuilder } from 'typeorm';

export enum DefaultPagination {
  PAGE = 1,
  LIMIT = 15
}

export interface PaginationParams<Entity, OrderingField extends keyof Entity> {
  query: SelectQueryBuilder<Entity>;
  orderingField: OrderingField;
  entityAlias: string;
  page?: number;
  limit?: number;
}

export interface Pagination<Entity> {
  page: number;
  count: number;
  total: number;
  records: Entity[];
}
