/** @format */
import capStr from '@util/capitalizeString'
import * as SectionComponents from './sections'

/* As you might have noticed by looking at this file,
 * it is not typed particularly well.
 * There are some problems to address before everything can be type safe.
 *
 * Copied from https://github.com/sanity-io/sanity-template-nextjs-landing-pages/blob/master/template/web/components/RenderSections.js
 *
 * It's incredible how resolveSections does its thing.
 * I, however, haven't tried doing something of the likes before.
 * I would have to do some research before typing this correctly,
 * which also means a refactor. It is probably quite straight forward 🤣
 * - Mathias Wøbbe 14/08
 */

/*
 * ESLint and TypeScript hates when you do this to your comments:
 */
function resolveSections(section: { _type: string; _key: string }) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line import/namespace,@typescript-eslint/no-unsafe-assignment,no-underscore-dangle
  const Section = SectionComponents[capStr(section._type)]

  if (Section) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Section
  }

  console.error('Cant find section', section) // eslint-disable-line no-console

  return null
}

interface IRenderSectionsProps {
  sections: [{ _type: string; _key: string }]
}

const RenderSections: React.FC<IRenderSectionsProps> = (props) => {
  const { sections } = props

  if (!sections) {
    console.error('Missing section')

    return <div>Missing sections</div>
  }

  return (
    <>
      {sections.map((section) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const SectionComponent = resolveSections(section)
        if (!SectionComponent) {
          // eslint-disable-next-line no-underscore-dangle
          return <div>Missing section {section._type}</div>
        }

        // eslint-disable-next-line no-underscore-dangle,@typescript-eslint/no-unsafe-assignment,react/jsx-props-no-spreading
        return <SectionComponent {...section} key={section._key} />
      })}
    </>
  )
}

export default RenderSections
