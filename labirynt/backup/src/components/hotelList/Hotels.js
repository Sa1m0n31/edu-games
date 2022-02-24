import React, { useState, useEffect } from 'react';
import getHotels from './services/getHotels';
import Hotel from './Hotel';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Hotels() {
    const [hotels, setHotels] = useState([])

    const [page, setpage] = useState(1);

    const [hasMore, sethasMore] = useState(true);

    useEffect(() => {
        getHotels(page)
            .then(data => setHotels(data));
        setpage(page + 1);
    }, []);

    const fetchData = async () => {

        const newHotels = await getHotels(page);

        setHotels([...hotels, ...newHotels]);

        if (newHotels.length === 0) {
            sethasMore(false);
        }
        setpage(page + 1);
    };

    const Hotels = styled.div`
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-content: center;
      align-items: center;
      justify-content:center;
    `
    return (
        <Hotels>
            <InfiniteScroll
                dataLength={hotels?.length ? hotels.length : 1} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                loader={<h1>laduje</h1>}
                endMessage={<h1>koniec</h1>}
            >
                {hotels ? hotels.map((hotel) => <Hotel key={hotel.id} hotel={hotel} />) : <h1>blad wczytywania</h1>}
            </InfiniteScroll>

        </Hotels>
    )
}
