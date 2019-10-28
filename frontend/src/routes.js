import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import BlogPosts from "./views/BlogPosts";

export default [{
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: () => < Redirect to = "/blog-overview" / >
    },
    {
        path: "/blog-overview",
        layout: DefaultLayout,
        component: BlogOverview
    },
    {
        path: "/blog-posts",
        layout: DefaultLayout,
        component: BlogPosts
    },
];