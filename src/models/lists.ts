import query from '@/service/TouchORM'

type ListParams = (
  params: {
    filterBy?: { id?: string | number, boardName?: string },
    sort?: { fields: string[], order: string },
    pager?: { limit: number, offset: number },
  },
) => Promise<any>

export const createList = async (listName: string, boardId: string): Promise<any> => {
  const fields = {
    board_id: boardId,
    name: listName,
    created_at: new Date().toISOString().
      replace(/T/, ' ').
      replace(/\..+/, ''),
  }

  const list = await query('lists')
    .create(fields)
    .init()

  return list
}

export const getLists: ListParams = async ({
  filterBy = {},
  sort = { fields: ['id'], order: 'ASC' },
  pager = {
    offset: 0,
    limit: 100,
  },
}): Promise<any> => {
  const board = await query('lists')
    .select('*')
    .where(filterBy)
    .orderBy(sort.fields, sort.order)
    .limit(pager.limit, pager.offset)
    .init()

  return board
}
