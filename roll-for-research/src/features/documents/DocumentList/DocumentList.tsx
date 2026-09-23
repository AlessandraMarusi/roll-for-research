import type { Document } from '../document';
import { DocumentCard } from '../DocumentCard/DocumentCard';

import styles from './DocumentList.module.css';

interface DocumentListProps {
  documents: Document[];
}

export function DocumentList({ documents }: DocumentListProps) {
  return (
    <div className={styles.list}>
      {documents.map((document) => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </div>
  );
}
