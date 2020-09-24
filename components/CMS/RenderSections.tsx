import capStr from '@util/capitalizeString'
import { Page } from 'APITypes'
import { FC } from 'react'
import * as SectionComponents from './sections'

/*
 * It's incredible how resolveSections does its thing.
 * I, however, haven't tried doing something of the likes before.
 * It is probably quite straight forward 🤣
 * - Mathias Wøbbe 14/08
 */

/*
 * ESLint and TypeScript hates when you do this to your comments:
 */
/**
 * @param section
 */
function resolveSections(section: Page['content']) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Section: FC =
    /**
     // TODO: Section should be typed with possible Section components
     */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    SectionComponents[capStr(section._type)]

  if (Section) {
    return Section
  }

  console.error('Cant find section', section) // eslint-disable-line no-console

  return null
}

interface IRenderSectionsProps {
  sections: Page['content'] | Array<Page['content']> | undefined
}

const RenderSections: React.FC<IRenderSectionsProps> = (props) => {
  const { sections } = props

  if (!sections) {
    console.error('Missing section')

    return <div>Missing sections</div>
  }

  if (Array.isArray(sections)) {
    return (
      <>
        {sections.map((section) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const SectionComponent = resolveSections(section)
          if (!SectionComponent) {
            // eslint-disable-next-line no-underscore-dangle
            return <div>Missing section {section?._type}</div>
          }

          // eslint-disable-next-line no-underscore-dangle,react/jsx-props-no-spreading
          return <SectionComponent {...section} key={section?._key} />
        })}
      </>
    )
  }

  const SectionComponent = resolveSections(sections)

  if (!SectionComponent) {
    // eslint-disable-next-line no-underscore-dangle
    return <div>Missing section {sections._type}</div>
  }

  // eslint-disable-next-line no-underscore-dangle,react/jsx-props-no-spreading
  return <SectionComponent {...sections} key={sections._key} />
}

export default RenderSections
