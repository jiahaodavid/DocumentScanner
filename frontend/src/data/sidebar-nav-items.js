export default function() {
    return [{
            title: "New Search",
            to: "/blog-overview",
            htmlBefore: '<i class="material-icons">edit</i>',
            htmlAfter: ""
        },
        {
            title: "Previous Docs",
            htmlBefore: '<i class="material-icons">vertical_split</i>',
            to: "/blog-posts",
        },

    ];
}