import { useEffect, useState } from 'react';

const TestFetchSpotify = () => {

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);


    useEffect(() => {
        const fetchData = async (): Promise<any> => {
            try {
                const response = await fetch(
                    "https://open.spotify.com/oembed?url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F5cXQjDLQbbuQqJBRKvJqjW%3Fsi%3D504287ce14c545d5", {
                        mode: "cors",
                    }
                );
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                let fetchedData = await response.json();
                setData(fetchedData);
                setError(null);
                
            }
            catch (err: any) {
                setError(err.message);
                setData(null);
            }
            finally {
                setLoading(false);   
            }
        };
        fetchData();
        console.log(data);


    },[loading]);
    return <div>
        {data != null
        ?
        <div> 
         <div>
                Title:  {/*data?.title*/} 
            </div>
        </div>

        :
            <span className="loading loading-spinner"></span>}
         </div> ;
}


export default TestFetchSpotify;