/** @format */

declare module '@sanity/block-content-to-react' {
  export interface BlockContent {
    projectId: string
    dataset: string
    renderContainerOnSingleChild?: boolean

    blocks: Array<{ _type: string }> | { _type: string }

    serializers?: {
      types?: Record<string, unknown>
      marks?: Record<string, unknown>

      list?: (props) => JSX.Element
      listItem?: (props) => JSX.Element

      block?: (props) => JSX.Element
      span?: (props) => JSX.Element
    }

    imageOptions?: {
      options: {
        query?: string
        projectId: string
        dataset: string
      }
      node: {
        asset: {
          url: string
          _ref: string
        }
      }
    }
  }

  const BlockContent: React.FC<BlockContent> = (props) => {}

  export default BlockContent
}
