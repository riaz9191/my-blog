'use client';

import { Editor } from 'novel';

const NovelEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  return (
    <Editor
      defaultValue={value}
      onUpdate={(editor) => {
        onChange(editor?.getHTML() || '');
      }}
    />
  );
};

export default NovelEditor;
