import { Button } from "../components/Button/Button";


function App() {
  return (
    <main
      style={{
        display: "flex",
        gap: "1rem",
        padding: "2rem",
      }}
    >
      <Button>
        New document
      </Button>

      <Button variant="secondary">
        Cancel
      </Button>

      <Button variant="ghost">
        Settings
      </Button>

      <Button variant="danger">
        Delete
      </Button>

      <Button size="lg">
        Start research
      </Button>
            <Button size="md">
        Start research
      </Button>
            <Button size="sm">
        Start research
      </Button>
    </main>
  );
}

export default App;