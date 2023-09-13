import { useGetUserQuery } from "../services/user";

export default function Dashboard() {
  const { name, surname, blood, isFetching } = useGetUserQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => ({
      name: data?.name,
      surname: data?.surname,
      blood: data?.blood,
      isFetching,
    }),
  });

  return (
    <div>
      <h1>Dashboard</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>
            Hello, {name} {surname}
          </p>
          <p>
            Your average blood pressure is {blood?.pressure} and heart rate is{" "}
            {blood?.heartRate}
          </p>
          <p>Blood type is {blood?.type}</p>
        </>
      )}
    </div>
  );
}
