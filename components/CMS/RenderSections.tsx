import React from 'react'
import capStr from '@util/capitalizeString'
import { Page, PageContent } from 'cms/Page'
import * as SectionComponents from './sections'

/*
 * It's incredible how resolveSections does its thing.
 * I, however, haven't tried doing something of the likes before.
 * It is probably quite straight forward
 * - Mathias Wøbbe 14/08 🤣
 */

/*
 * ESLint and TypeScript hates when you do this to your comments:
 */
/**
 * @param {PageContent} section The section the resolve
 * @returns {React.FC | null} A section
 */
function resolveSections(section?: PageContent): React.FC | null {
  /**
   * // TODO: Section should be typed with possible Section components
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Section: React.FC =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line import/namespace
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
            return <div>Missing section {section?._type}</div>
          }

          return <SectionComponent {...section} key={section?._key} />
        })}
      </>
    )
  }

  const SectionComponent = resolveSections(sections)

  if (!SectionComponent) {
    return <div>Missing section {sections._type}</div>
  }

  return <SectionComponent {...sections} key={sections._key} />
}

export default RenderSections
