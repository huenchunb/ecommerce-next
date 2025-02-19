export default function SearchPage({ searchParams }: { searchParams: { query: string } }) {

    const { query } = searchParams
    return (
        <div>SearchPage for {query}</div>
    )
}
