import React from 'react'
import axios from "axios";
import { useQuery } from 'react-query'
import useCats from '../_services/catss.service'
import getBreedByID from '../_services/breeds.service.js'
import { QueryClient } from 'react-query';
const queryClient = new QueryClient();




const Cats = () => {
  const query = useQuery("cats", useCats);
  const [setCatId] = React.useState(-1);

  const { status, data, error, isFetching } = useCats();

  console.log(data);
//  if(!query.data) {
//    throw new Error('Failed to load data');
//  }
  return (
      <div>
      <h1>Cats</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
            <>
              <div>
                {data.map((cat) => (
                  <p key={cat.id}>
                    <button
                      onClick={() => setCatId(cat.id)}
                      href="#"
                      style={
                        // We can access the query data here to show bold links for
                        // ones that are cached
                        queryClient.getQueryData(["cat", cat.id])
                          ? {
                              fontWeight: "bold",
                              color: "green",
                            }
                          : {}
                      }
                    >
                      {cat.name}
                    </button>
                  </p>
                ))}
              </div>
              <div>{isFetching ? "Background Updating..." : " "}</div>
            </>
          )}
        </div>
      </div>
    );
}


export default Cats;
