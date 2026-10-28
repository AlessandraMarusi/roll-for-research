import type { Document } from '../document';
import styles from './DocumentViewer.module.css';

interface DocumentViewerProps {
  document: Document | null;
}

export function DocumentViewer({ document }: DocumentViewerProps) {
  if (!document) {
    return (
      <div className={styles.placeholder}>
        <h2>No document selected</h2>
        <p>Select a document from the list to view its contents.</p>
      </div>
    );
  }

  const formattedDate = new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
  }).format(new Date(document.updatedAt));

  return (
    <article className={styles.viewer}>
      <header className={styles.header}>
        <span className={styles.type}>
          {document.type === 'note' ? 'Note' : 'AI summary'}
        </span>

        <h2 className={styles.title}>{document.title}</h2>

        <p className={styles.metadata}>Last updated {formattedDate}</p>
      </header>

      <div className={styles.content}>{document.content}</div>

      {document.tags.length > 0 && (
        <footer className={styles.footer}>
          {document.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </footer>
      )}
    </article>
  );
}
