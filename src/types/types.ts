export type RouteType = "dir" | "file";

export interface Route {
    path?: string;
    type: RouteType;
    fileName?: string;
    children?: Route[];
}

/**
 * A position in the console
 */
export interface CursorPosition {
    /**
     * Left cursor position value
     */
    left: number;
    /**
     * Top cursor position value
     */
    top: number;
}
