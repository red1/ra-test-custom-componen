import React from "react";
import {
  TextInput,
  SelectInput,
  CheckboxGroupInput,
  ImageInput,
  ImageField
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export default (parameter, definition) => {
  switch (parameter.type) {
    case "text":
      return <TextInput source={parameter.name} />;
    case "url":
      return <TextInput source={parameter.name} type="url" />;
    case "select":
      return (
        <SelectInput source={parameter.name} choices={parameter.choices} />
      );
    case "checkboxes":
      return (
        <CheckboxGroupInput
          source={parameter.name}
          choices={parameter.choices}
        />
      );
    case "richText":
      return (
        <RichTextInput
          source="body"
          toolbar={[["bold", "italic", "underline", "color"]]}
        />
      );
    case "image":
      return (
        <ImageInput multiple source="pictures" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
      );
    default: {
      console.warn(
        `Invalid parameter type "${parameter.type}" for definition "${
          definition.name
        }"`
      );
      return null;
    }
  }
};
