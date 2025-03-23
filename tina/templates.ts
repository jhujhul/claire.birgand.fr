import type { TinaField } from "tinacms";
export function projetFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titre",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Sous-titre",
    },
    {
      type: "image",
      name: "mainImage",
      label: "Image principale",
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Sections",
      name: "sections",
      templates: [
        {
          fields: sectionFields(),
          label: "Section",
          name: "section",
        },
      ],
    },
    {
      type: "boolean",
      name: "featured",
      label: "Sur la page d'accueil",
    },
    {
      type: "string",
      name: "categories",
      label: "Catégories",
      list: true,
      options: ["Lettering", "Graphisme", "Design"],
    },
  ] as TinaField[];
}
function sectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titre Section",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description Section",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "image",
      name: "images",
      label: "Section Images",
      list: true,
    },
  ] as TinaField[];
}
export function t_moignageFields() {
  return [
    {
      type: "string",
      name: "name",
      label: "Nom",
      required: true,
    },
    {
      type: "string",
      name: "profession",
      label: "Profession",
      required: true,
    },
    {
      type: "string",
      name: "quote",
      label: "Citation",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ] as TinaField[];
}
