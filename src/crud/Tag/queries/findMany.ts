import { queryField, nonNull, list } from 'nexus'

export const TagFindManyQuery = queryField('findManyTag', {
  type: nonNull(list(nonNull('Tag'))),
  args: {
    where: 'TagWhereInput',
    orderBy: list('TagOrderByWithRelationAndSearchRelevanceInput'),
    cursor: 'TagWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TagScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.tag.findMany({
      ...args,
      ...select,
    })
  },
})
