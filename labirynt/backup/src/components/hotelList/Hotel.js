import styled from 'styled-components';
import star from '../../static/img/star.png'

const HotelContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0;
    margin: 8px;
    border: 2px solid #003580;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    width: 70vw;
    `
const HotelImage = styled.div`
    height: 250px;
    width: 250px;
    padding-right: 8px;
    margin-right: 8px;
    background-color: rgb(153, 204, 255);
    `
const HotelWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex:1;
    `
const HotelInfo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
    `
const HotelRating = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    `

const HotelName = styled.div`
    font-size:25px;
    font-weight: bold;
    `

const HotelAddress = styled.div`
margin-top: 10px;
    font-size:19px;
    `

const HotelPrices = styled.div`
    
    font-size:14px;
    `
const scoreFont = {
    fontSize: 20,
}

export default function Hotel(props) {
    return (
        <HotelContainer>
            <HotelImage></HotelImage>
            <HotelWrapper>
                <HotelInfo>
                    <HotelName>
                        {props.hotel.name}
                        <HotelAddress>{props.hotel.street},{props.hotel.city}</HotelAddress>
                    </HotelName>

                    <HotelPrices>
                        {/* {console.log(props.hotel.prices !== null)}
                        {props.hotel.prices.length!==0  ? <p>*Pies od: $</p> : <p>brak</p>} */}
                        {props.hotel.prices["2"] ? <p>*custom: {props.hotel.prices["2"]}</p> : <span/>}
                        <p>*Pies od: 25$</p>
                        <p>*Kot od: 30$</p>
                    </HotelPrices>

                </HotelInfo>
                <HotelRating>
                    <img src={star} width="100px" height="100px" alt="star"/>
                    <p style={scoreFont}>{props.hotel.hotelScores.score ? props.hotel.hotelScores.score : 0}/5</p>
                </HotelRating>
            </HotelWrapper>
        </HotelContainer>
    )
}