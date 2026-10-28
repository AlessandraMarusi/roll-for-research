import type { Document } from './document';

export const mockDocuments: Document[] = [
  {
    id: "1",
    title: "Sessione 4 Note",
    content: "La sessione si apre drammaticamente: il party si trova nel famigerato Covo del Sotto-Divano, un territorio controllato dalla temibile gilda criminale dei Cani Randagi. L'obiettivo della missione è recuperare il leggendario Laser Rosso Eterno, un artefatto in grado di ipnotizzare qualsiasi felino.",

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
    title: "AI Summary - Sessione 4",
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