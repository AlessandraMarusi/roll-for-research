import type { Document } from './document';

export const mockDocuments: Document[] = [
  {
    id: "1",
    title: "Session 4 Notes",
    content: "...",

    createdAt: "2026-09-20",
    updatedAt: "2026-09-23",

    type: "note",

    tags: [
      "session-4",
      "goblin",
      "village",
    ],
  },

  {
    id: "2",
    title: "AI Summary - Session 4",
    content: "...",

    createdAt: "2026-09-23",
    updatedAt: "2026-09-23",

    type: "ai-summary",

    tags: [
      "summary",
      "session-4",
    ],
  },
];