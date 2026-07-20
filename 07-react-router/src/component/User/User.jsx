// useParams() is a React Router Hook used to read dynamic values from the URL

import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="bg-gray-600 text-white text-2xl p-4">user : {userid}</div>
    </>
  );
}

export default User;
