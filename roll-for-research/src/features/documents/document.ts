export type DocumentType =
    | "note"
    | "ai-summary";

export interface Document {
  id: string;

  title: string;
  content: string;

  createdAt: string;
  updatedAt: string;

  type: DocumentType;

  tags: string[];
}