import { createTypedHooks } from 'easy-peasy'
import StoreModel from 'state/StoreModel'

const typedHooks = createTypedHooks<StoreModel>()

export const { useStoreActions, useStoreDispatch, useStoreState } = typedHooks
