"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapToolbar from "./tiptap-toolbar";

const TiptapEditor = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div>
      <TiptapToolbar editor={editor} />
      <EditorContent editor={editor} className="prose dark:prose-invert max-w-none w-full rounded-b-lg border border-gray-700 p-4 bg-gray-800 text-white" />
    </div>
  );
};

export default TiptapEditor;