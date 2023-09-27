import { useGetUserQuery } from "../services/user";

export default function Settings() {
  const {isFetching, login, name } = useGetUserQuery(undefined, {
    selectFromResult: ({data, isFetching}) => ({
      login: data?.login,
      name: data?.name,
      isFetching
    })
  })
  return (
    <div>
      <h1>Settings</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>My profile</h2>
          <hr></hr>
          <p>Preffered name</p>
          <input value={name}></input>
          <h2>Account security</h2>
          <hr></hr>
          <div className="block">
            <p>Email</p>
            <p>{login?.email}</p>
            <button>Change email</button>
          </div>
          <div className="block">
            <p>Password</p>
            <p>****</p>
            <button>Change password</button>
          </div>
          <div className="block">
            <p>Phone number</p>
            <p>{login?.phone}</p>
            <button>Change phone number</button>
          </div>
        </>
      )}
    </div>
  );
}
