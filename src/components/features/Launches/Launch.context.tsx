import { createContext } from "react";

export type LaunchVariables = Record<string, string | any >
interface ContextProps {
    refetchData?: (data: LaunchVariables) => void;
}

export const LaunchContext = createContext<ContextProps>({});

