import type { CursorPosition } from "../types/types";

export class Position {
    private static position: CursorPosition = { left: 0, top: 0 };

    public static getPosition(selection: Selection): CursorPosition {
        if (!selection.rangeCount) return { ...this.position };

        const range = selection.getRangeAt(0).cloneRange();
        range.collapse(true);

        const rect = range.getBoundingClientRect();

        if (rect.width !== 0 || rect.height !== 0) {
            this.position = {
                left: rect.left,
                top: rect.top,
            };
        }

        return { ...this.position };
    }
}
