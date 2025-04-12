import type { Route } from "../types/types";

export const route: Route = {
    path: "/",
    type: "dir",
    children: [
        {
            path: "/about",
            type: "dir",
            children: [{ type: "file", fileName: "about_me" }],
        },
        {
            path: "/works",
            type: "dir",
            children: [
                { type: "file", fileName: "work1" },
                { type: "file", fileName: "work2" },
            ],
        },
        {
            path: "/blog",
            type: "dir",
            children: [
                { type: "file", fileName: "post1" },
                { type: "file", fileName: "post2" },
            ],
        },
    ],
};
