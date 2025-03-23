import { defineConfig } from "tinacms";

import { projetFields } from "./templates";
import { t_moignageFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "cms",
      publicFolder: "public",
      static: false,
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "md",
        label: "Mentions légales",
        name: "mentions_l_gales",
        path: "data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "mentions-legales",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Témoignages",
        name: "t_moignages",
        path: "data/_testimonials",
        match: {
          include: "**/*",
        },
        fields: [...t_moignageFields()],
      },
      {
        format: "json",
        label: "Configuration",
        name: "configuration",
        path: "data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
          {
            name: "email",
            label: "Email",
            type: "string",
            description:
              "L'email attaché au lien email du header et affiché dans le footer",
          },
          {
            name: "ville",
            label: "Ville",
            type: "string",
            description: "La ville affichée dans le footer",
          },
          {
            name: "telephone",
            label: "Téléphone",
            type: "string",
            description: "Le téléphone affichée dans le footer",
          },
          {
            name: "linkedin",
            label: "Linkedin",
            type: "string",
            description: "Le lien Linkedin affichée dans le header",
          },
        ],
      },
      {
        format: "md",
        label: "Projets",
        name: "projets",
        path: "data/_projects",
        match: {
          include: "**/*",
        },
        fields: [...projetFields()],
      },
    ],
  },
});
