import React from 'react';
import moment from 'moment';

const Card = ({title,description,price,location,date,image}) => {
    

//formatting the date from Unix timestamps using moment.js library
const unixTimestamp = date;
 
const dateNew = moment.unix(unixTimestamp);
 
const formattedDate = dateNew.format('MMMM Do YYYY');
    

    return (

       

        <div class="w-full md:w-[510px] md:h-[500px] bg-primary px-2 py-4 border border-gray-200 rounded-lg shadow  ">
            <img
                className="w-full h-48 object-cover mb-2 rounded-lg"
                src={image}
                alt="Card Image"
            />

            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800  ">{title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 ">{description}</p>
                <p className="text-gray-500 mb-4 md:text-left">
                    <span className="font-semibold">Date:</span> {formattedDate}
                </p>
                <p className="text-gray-500 mb-4 md:text-left">
                    <span className="font-semibold ">Location:</span> {location}
                </p>
                <p className="text-lg font-bold text-gray-800 mb-2 md:text-left">
                    <span className="font-semibold">Price:</span> ${price}
                </p>

            </div>
        </div>

    );
};

export default Card;
