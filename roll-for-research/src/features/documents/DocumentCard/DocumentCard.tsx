import type { Document } from '../document';
import styles from './DocumentCard.module.css';

interface DocumentCardProps {
  document: Document;
  selected: boolean;
  onSelect: () => void;
}

export function DocumentCard({
  document,
  selected,
  onSelect,
}: DocumentCardProps) {
  const formattedDate = new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
  }).format(new Date(document.updatedAt));

  return (
    <button
      type="button"
      className={`${styles.card} ${selected ? styles.selected : ''}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      <span className={styles.header}>
        <span className={styles.type}>
          {document.type === 'note' ? 'Note' : 'AI summary'}
        </span>
        <span className={styles.date}>{formattedDate}</span>
      </span>

      <span className={styles.title} role="heading" aria-level={3}>
        {document.title}
      </span>

      <span className={styles.content}>{document.content}</span>

      {document.tags.length > 0 && (
        <span className={styles.tags}>
          {document.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </span>
      )}
    </button>
  );
}
