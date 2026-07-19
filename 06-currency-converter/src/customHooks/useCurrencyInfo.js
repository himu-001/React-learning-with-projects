// A custom hook is just a JavaScript function

// The only special thing is: Its name starts with use -> It can use React hooks (useState, useEffect)  -> Nothing magical.

// useEffect() cant be async if you want to use asycn await then initilaize another async function inside useEffect or use .then() for fetch either way is good

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data,setData] = useState({})

    useEffect(() => {
        async function getData() {
            try {
              const response = await fetch(
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
              );
                const gotData = await response.json();
                
                setData(gotData[currency]);

                console.log(data);
                
            } catch (error) {
              console.log(error);
            }
        }
        getData();
    }, [currency])

    console.log(data);
    return data;
    
}

export default useCurrencyInfo;