import { DocumentList } from '../features/documents/DocumentList/DocumentList';
import { mockDocuments } from '../features/documents/mockDocuments';
import { AppShell } from './AppShell/AppShell';

function App() {
  return (
    <AppShell>
      <div
        style={{
          padding: 'var(--space-8)',
        }}
      >
        <h1>My Documents</h1>

        <DocumentList documents={mockDocuments} />
      </div>
    </AppShell>
  );
}

export default App;
