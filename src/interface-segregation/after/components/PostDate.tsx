export function PostDate({ date }: { date: Date }) {
  return <p>{date.toDateString()}</p>;
}
