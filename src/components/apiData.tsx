import { useEffect, useState } from "react";

export function ApiData() {
    const [data, setData] = useState<any>();
    const [key, searchKey] = useState<string>();
    const [result, setResult] = useState<any>();

    const fetchDataFromApi = () => {
        fetch('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000')
            .then(data => data.json()).then(json => {
                setData(json.data); console.log(json.data);
            }).catch(err => console.log(err)
            )
    }

    useEffect(() => { fetchDataFromApi() }, []);


    const setKey = (event) => { searchKey(event.target.value) };

    const searchReslut = () => { setResult(data.find(x => x.asset == key)) };

    const resetSearch = () => { setResult(null) }
    return (
        <div>
            <div>
                <h3>Search assets</h3>
                <input type={"text"} value={key} onChange={setKey}></input>
                <button onClick={searchReslut}>Search</button>
                <button onClick={resetSearch}>Reset</button>
                {result ? <h1>{result.assetId}</h1> : <h1>Asset not found</h1>}
            </div>
            <hr />

            <h1>ALL ASSETS AT GLANCE</h1>
            {data ? <ul>{data.map(x => (
                <li>{x.asset}</li>
            ))}</ul> : <div>{"Loading..."}</div>}
        </div>
    )
}