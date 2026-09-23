import type { Document } from '../document';
import styles from './DocumentCard.module.css';

interface DocumentCardProps {
  document: Document;
  onClick?: () => void;
}

export function DocumentCard({ document, onClick }: DocumentCardProps) {
  return (
    <article className={styles.card} onClick={onClick}>
      <div className={styles.header}>
        <h3 className={styles.title}>{document.title}</h3>

        <span className={styles.type}>{document.type}</span>
      </div>

      <p className={styles.content}>{document.content}</p>

      <div className={styles.footer}>
        <div className={styles.tags}>
          {document.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <time dateTime={document.updatedAt}>{document.updatedAt}</time>
      </div>
    </article>
  );
}
