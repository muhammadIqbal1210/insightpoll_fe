"use client";

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Italic,
  Underline,
  Heading,
  Link,
  List,
  BlockQuote,
  Paragraph,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  FileRepository,
  Essentials,
  Alignment,
  Undo,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import { InsightPollUploadPlugin } from "./UploadAdapter";

interface CustomCKEditorProps {
  value: string;
  onChange: (data: string) => void;
  placeholder?: string;
}

export default function CustomCKEditor({
  value,
  onChange,
  placeholder = "Tulis isi berita atau artikel riset lengkap di sini...",
}: CustomCKEditorProps) {
  return (
    <div className="ckeditor-wrapper">
      <CKEditor
        editor={ClassicEditor}
        data={value}
        config={{
          licenseKey: "GPL", // Open source license
          placeholder,
          plugins: [
            Essentials,
            Paragraph,
            Heading,
            Bold,
            Italic,
            Underline,
            Link,
            List,
            BlockQuote,
            Alignment,
            Image,
            ImageCaption,
            ImageResize,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            FileRepository,
            Undo,
          ],
          extraPlugins: [InsightPollUploadPlugin],
          toolbar: {
            items: [
              "heading",
              "|",
              "bold",
              "italic",
              "underline",
              "|",
              "link",
              "insertImage",
              "blockQuote",
              "|",
              "bulletedList",
              "numberedList",
              "alignment",
              "|",
              "undo",
              "redo",
            ],
            shouldNotGroupWhenFull: true,
          },
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraf",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
            ],
          },
          image: {
            toolbar: [
              "imageStyle:inline",
              "imageStyle:block",
              "imageStyle:side",
              "|",
              "toggleImageCaption",
              "imageTextAlternative",
              "|",
              "resizeImage",
            ],
          },
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
    </div>
  );
}
