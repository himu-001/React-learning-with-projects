import { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const response = await fetch("https://api.github.com/users/himu-001");

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGithubData();
  }, []);
    
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <img
          src={data?.avatar_url}
          alt="GitHub Avatar"
          className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500"
        />

        <h1 className="text-3xl font-bold mt-6 text-gray-800">himu-001</h1>

        <div className="mt-6 bg-orange-50 rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-700">Followers</h2>

          <p className="text-5xl font-bold text-orange-600 mt-2">
            {data?.followers}
          </p>
        </div>

        <a
          href="https://github.com/himu-001"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Visit GitHub ↗
        </a>
      </div>
    </div>
  );
}


export default Github;
