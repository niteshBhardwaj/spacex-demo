import { createContext } from "react";
import { FilterKeys } from "./LaunchFIlterBar.view";

export type LaunchVariables = {
    find: FilterKeys
}
interface ContextProps {
    refetchData?: (data: LaunchVariables) => void;
}

export const LaunchContext = createContext<ContextProps>({});

