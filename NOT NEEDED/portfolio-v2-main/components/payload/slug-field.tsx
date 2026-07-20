"use client";
import React, { useEffect, useRef } from "react";

import { useField, useFormFields, TextInput } from "@payloadcms/ui";
import { TextFieldClientProps } from "payload";

const generateSlug = (name: string): string => {
  return (name || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

interface SlugFieldProps extends TextFieldClientProps {
  fieldName: string;
}

export const SlugField: React.FC<SlugFieldProps> = ({
  fieldName,
  path,
  field,
}) => {
  // Get the current field's state (slug)
  const { value, setValue } = useField<string>({ path });

  // Watch the 'name' field specifically
  const nameField = useFormFields(([fields]) => fields[fieldName || "name"]);
  const nameValue = nameField?.value as string;

  // Track if the field has been manually edited
  const isManuallyEdited = useRef(false);

  // Auto-generate slug whenever nameValue changes, but only if the field hasn't been manually edited
  useEffect(() => {
    if (nameValue && !isManuallyEdited.current) {
      const newSlug = generateSlug(nameValue);
      setValue(newSlug);
    }
  }, [nameValue, setValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isManuallyEdited.current = true;
    setValue(e.target.value);
  };

  // Filter out incompatible properties from field props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { hasMany, admin, ...compatibleFieldProps } = field;

  return (
    <TextInput
      path={path}
      value={value || ""}
      onChange={handleChange} // Allows manual override
      description="URL-friendly identifier (auto-generated from name)"
      placeholder="e.g., landscape-paintings"
      {...compatibleFieldProps}
    />
  );
};

export default SlugField;
