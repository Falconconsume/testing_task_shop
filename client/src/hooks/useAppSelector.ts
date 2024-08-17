import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@/store/store';

// Define a type-safe hook for selecting from the Redux store
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;