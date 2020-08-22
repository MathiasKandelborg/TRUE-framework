/** @format */
import { MutationEvent } from '@sanity/client'
import { getClient } from '@util/api'
import { APIRoute, Page } from 'APITypes'
import groq from 'groq'
import { Dispatch } from 'react'

function getPreviewPageListenerBySlug(pageId: string, setData: Dispatch<Page>) {
  /*   console.log(pageId) */
  const whichId = pageId
  const data = getClient(true)
    .listen(groq`*[_type == "page" && _id == $pageId]{...}`, {
      pageId: whichId
    })
    .subscribe(
      (update: MutationEvent<Page>) => {
        console.log('Page subscribe works')
        const pageRes = update.result
        /*     const prevRev = update.previousRev
        const resRev = update.resultRe */

        console.log(`Page is updated: ${JSON.stringify(pageRes, null, 2)}`)

        console.log(`There is an update!: ${JSON.stringify(pageRes?.title)}`)
        if (pageRes.title) setData(pageRes)
      },
      (err) => console.log(err),
      () => console.log('complete')
    )

  return data
}

export function getPreviewRouteListenerBySlug(
  routeId: string,
  setData: Dispatch<APIRoute>
) {
  /*   console.log(routeId ) */

  const data = getClient(true)
    .listen(groq`*[_type == "route" && slug.current == $routeId]`, {
      routeId
    })
    .subscribe(
      (update: MutationEvent<APIRoute>) => {
        console.log('Route subscribe works')
        const routeRes = update.result
        /*      const prevRev = update.previousRev
        const resRev = update.resultRe */

        setData(routeRes!)
      },
      (err) => console.log(err),
      () => console.log('complete')
    )

  return data
}
export default getPreviewPageListenerBySlug
