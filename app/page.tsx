import Welcome from '../components/Welcome'; // We'll create this in Step 3

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Welcome title="Welcome to the App!" /> {/* Prop example */}
    </div>
  );
}