import { useGetUserQuery } from "../services/user";

export default function Dashboard() {
  const { name, blood, isFetching, chronicDiseases } = useGetUserQuery(
    undefined,
    {
      selectFromResult: ({ data, isFetching }) => ({
        name: data?.name,
        blood: data?.blood,
        chronicDiseases: data?.diseases.filter(
          (disease: any) => disease.chronic
        ),
        isFetching,
      }),
    }
  );

  return (
    <div>
      <h1>Dashboard</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>
            Hello, {name}
          </p>
          <p>
            Your average blood pressure is {blood?.pressure} and heart rate is{" "}
            {blood?.heartRate}
          </p>
          <p>Blood type is {blood?.type}</p>
          <p>Chronic diseases:</p>
          <ul>
            {chronicDiseases?.map((dis: any) => (
              <li key={dis.id}>{dis.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
