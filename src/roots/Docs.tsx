import { useGetUserQuery } from "../services/user";

export default function Docs() {
  const {isFetching, docs } = useGetUserQuery(
    undefined,
    {
      selectFromResult: ({ data, isFetching }) => ({
        docs: data?.docs,
        isFetching,
      }),
    }
  );

  return (
    <div>
      <h1>Docs</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {docs?.map((doc: any) => (
              <li key={doc.id}>{doc.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}