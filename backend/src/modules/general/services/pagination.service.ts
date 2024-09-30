import { Injectable } from '@nestjs/common';

import {
  DefaultPagination,
  Pagination,
  PaginationParams
} from '../interfaces/pagination.interface';

@Injectable()
export class PaginationService {
  constructor() {}

  async getPage<Entity, OrderingField extends keyof Entity>(
    params: PaginationParams<Entity, OrderingField>
  ): Promise<Pagination<Entity>> {
    const { query, entityAlias, orderingField } = params;
    let { page, limit } = params;

    page = page ? Number(page) : DefaultPagination.PAGE;
    limit = limit ? Number(limit) : DefaultPagination.LIMIT;

    const [records, total] = await query
      .take(limit)
      .skip((page - 1) * limit)
      .orderBy(`${entityAlias}.${orderingField.toString()}`, 'DESC')
      .getManyAndCount();

    if (!total) return { page: 1, count: 0, total: 0, records: [] };

    const currentPage = Math.ceil(total / limit);

    if (page > currentPage) {
      return { page, count: records.length, total, records: [] };
    }

    return {
      page,
      count: records.length,
      total,
      records
    };
  }
}
