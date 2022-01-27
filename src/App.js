import React from 'react';

// import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import Cats from './components/Cats';

const queryClient = new QueryClient();


/** 
 * For loading a single breed of cat id
 * **/
 const useBreed = (breedId) => {
  return useQuery(["breed", breedId], () => getBreedById(breedId), {
    enabled: !!breedId,
  });
}

function Breed({ breedId, setBreedId }) {
  const { status, data, error, isFetching } = useBreed(breedId);

  return (
    <div>
      <div>
        <a onClick={() => setBreedId(-1)} href="#">
          Back
        </a>
      </div>
      {!breedId || status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.id}</h1>
          <div>
            <p>{data.name}</p>
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">Cats</header>
      <QueryClientProvider client={queryClient}>
        {breedId > -1 ? (
          <Breed breedId={breedId} setBreedId={setBreedId} />
        ) : (
        <Cats />
        )}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
