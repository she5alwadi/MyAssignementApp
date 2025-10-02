import Counter from '../../components/Counter';  // We'll create this in Step 5

export default function CounterPage() {
  return (
    <div>
      <h1>Counter Page</h1>
      <Counter initialCount={0} step={1} />  {/* Prop example */}
    </div>
  );
}