function ParentComponent() {
  const getIssues = async () => {
    // fetch issues from backend
  };

  return (
    <ChildComponent childGetIssues={getIssues} />
  );
}


// child comppnent
function ChildComponent({ childGetIssues }) {
  const handleSomething = () => {
    childGetIssues(); // calling the function defined in parent
  };

  return (
    <button onClick={handleSomething}>Refresh</button>
  );
}
