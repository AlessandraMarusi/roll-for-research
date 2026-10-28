import type { Document } from '../document';
import { DocumentCard } from '../DocumentCard/DocumentCard';

import styles from './DocumentList.module.css';

interface DocumentListProps {
  documents: Document[];
  selectedDocumentId: string | null;
  onSelectDocument: (documentId: string) => void;
}

export function DocumentList({
  documents,
  selectedDocumentId,
  onSelectDocument,
}: DocumentListProps) {
  return (
    <div className={styles.list}>
      {documents.map((document) => (
        <DocumentCard
          key={document.id}
          document={document}
          selected={document.id === selectedDocumentId}
          onSelect={() => onSelectDocument(document.id)}
        />
      ))}
    </div>
  );
}
