"use client";
export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      {error.name} - {error.message}
    </div>
  );
}
