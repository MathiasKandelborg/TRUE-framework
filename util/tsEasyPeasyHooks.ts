import { createTypedHooks } from 'easy-peasy'
import IStoreModel from 'state/StoreModel'

const typedHooks = createTypedHooks<IStoreModel>()

export const { useStoreActions, useStoreDispatch, useStoreState } = typedHooks
