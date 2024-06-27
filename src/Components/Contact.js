
import React from "react";

let Contact = () => {
    let render =  true
    let array = [
    'Name : lalitha',
    'Eamil : lalitha@gmail.com',
    'Contact :<s +91 9100954119',
    'Recipient Name: Jane Smith',
    'Street Address: kphp',
    'City: hyderabad',
    'State/Province: kphp',
    'ZIP/Postal Code: SC2U',
    'Country: United States'
    ]
    return (
        <div className="contact-c">
            {render && array.map((e,i) => {
                return(
                    <ul key={i}>
                        <li>{e}</li>
                    </ul>
                )
            })}
        </div>
    );
}
export default Contact;


