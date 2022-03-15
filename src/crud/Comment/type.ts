import { objectType } from 'nexus'

export const Comment = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Comment',
  definition(t) {
    t.int('id')
    t.field('createAt', { type: 'DateTime' })
    t.string('content')
    t.nullable.field('phrase', {
      type: 'Phrase',
      resolve(root: any) {
        return root.phrase
      },
    })
    t.nullable.int('phraseId')
    t.list.field('comments', {
      type: 'Comment',
      args: {
        where: 'CommentWhereInput',
        orderBy: 'CommentOrderByWithRelationAndSearchRelevanceInput',
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CommentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.comments
      },
    })
    t.nullable.field('comment', {
      type: 'Comment',
      resolve(root: any) {
        return root.comment
      },
    })
    t.nullable.int('commentId')
    t.field('_count', {
      type: 'CommentCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
