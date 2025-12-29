// create-cabin-fields.ts
export const createCabinFields = [
  { name: "name", label: "Cabin name", type: "text" },
  { name: "maxCapacity", label: "Max capacity", type: "number" },
  { name: "regularPrice", label: "Regular price", type: "number" },
  { name: "discount", label: "Discount", type: "number" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "image", label: "Cabin image", type: "file" },
] as const;
