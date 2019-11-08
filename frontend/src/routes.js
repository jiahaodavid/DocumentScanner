import React from "react";
import {
    Redirect
} from "react-router-dom";

// Layout Types
import {
    DefaultLayout
} from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import PreviousDocuments from "./views/PreviousDocuments";
import CheckDocument from "./views/CheckDocument"

export default [{
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: () => < Redirect to = "/Documents-overview" / >
    },
    {
        path: "/Documents-overview",
        layout: DefaultLayout,
        component: BlogOverview
    },
    {
        path: "/previous-documents",
        layout: DefaultLayout,
        component: PreviousDocuments
    },
    {
        path: "/previous-documents/document",
        layout: DefaultLayout,
        component: CheckDocument
    }
];