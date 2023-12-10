import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { RootDispatch, RootState } from '../store/index.store'

export const useStoreDispatch = () => useDispatch<RootDispatch>()
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector
