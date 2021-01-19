import { useEntries } from '../../lib/swr-hooks';

export default function IndexPage() {
  const { entries, isLoading } = useEntries();

  if (isLoading) {
    return (
      <div>
        Loading
      </div>
    );
  }

  return (
    <div>
      {entries}
    </div>
  );
}
