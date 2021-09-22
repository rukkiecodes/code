export default [
  {
    path: "/",
    name: "Editor",
    component: () => import("../views/Editor.vue"),

    children: [
      {
        path: "editor",
        name: "CodeEditor",
        component: () => import("../views/CodeEditor.vue")
      },
    ],
  },
];
