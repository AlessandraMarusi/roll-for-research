import { useState } from 'react';
import { DocumentList } from '../DocumentList/DocumentList';
import { mockDocuments } from '../mockDocuments';
import type { DocumentType } from '../document';
import styles from './MyDocumentsPage.module.css';

export function MyDocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedType, setSelectedType] = useState<DocumentType | 'all'>('all');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredDocuments = mockDocuments.filter((document) => {
    const matchesQuery =
      document.title.toLowerCase().includes(normalizedQuery) ||
      document.content.toLowerCase().includes(normalizedQuery);

    const matchesType =
      selectedType === 'all' || document.type === selectedType;

    return matchesQuery && matchesType;
  });
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>My Documents</h1>
          <p className={styles.description}>
            Your notes and research, all in one place.
          </p>
        </div>

        <span className={styles.count}>
          {filteredDocuments.length} of {mockDocuments.length} documents
        </span>
      </header>
      <div className={styles.toolbar}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Search documents..."
          aria-label="Search documents"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        <select
          className={styles.typeSelect}
          aria-label="Filter documents by type"
          value={selectedType}
          onChange={(event) =>
            setSelectedType(event.target.value as DocumentType | 'all')
          }
        >
          <option value="all">All documents</option>
          <option value="note">My notes</option>
          <option value="ai-summary">AI summaries</option>
        </select>
      </div>
      {filteredDocuments.length > 0 ? (
        <DocumentList documents={filteredDocuments} />
      ) : (
        <div className={styles.emptyState}>
          <h2>No documents found</h2>
          <p>
            Try changing your search or selecting a different document type.
          </p>
        </div>
      )}
    </section>
  );
}
