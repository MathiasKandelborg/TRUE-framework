/** @format */

import BlockContent from '@sanity/block-content-to-react'
import serializers from './serializers'

interface ISimpleBlockContentProps {
  blocks: Array<{ _type: string }> | { _type: string }
}

const SimpleBlockContent: React.FC<ISimpleBlockContentProps> = (props) => {
  const { blocks } = props

  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
      dataset="production"
    />
  )
}

export default SimpleBlockContent
