import React from "react";
import Travel from "./Travel";

const travels = [
    {
        distance:
            "1240km",
        pays: "Belgique",
        destination: "Namur",
        image:
            "http://wbt2.azureedge.net/sites/default/files/styles/content_slider/public/11_444347_CitadelleDeNamur_%28c%29WBT-DenisErroyaux.jpg?itok=yb1ymX2K&hash=b0209cffd9c77f6b3f1366f914a7a2c3e6f1e3cb7ea18c5078450b460ab3c87e&c=063ccbfc0d8e5f9209b1613fb7d2bc22"
    },
    {
        distance:
            "400km",
        pays: "Belgique",
        destination: "Mons",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/070204_%2890%29_Mons.JPG/1200px-070204_%2890%29_Mons.JPG"
    },
    {
        distance:
            "755km",
        pays: "Espagne",
        destination: "Madrid",
        image:
            "https://cdn.getyourguide.com/img/tour_img-440052-148.jpg"
    },
    {
        distance:
            "896km",
        pays: "Irlande",
        destination: "Galway",
        image:
            "https://cdn-03.independent.ie/incoming/article34889156.ece/ffa39/AUTOCROP/w620/iw%20Galway1%20Deposi.jpg"
    },
    {
        distance:
            "1270km",
        pays: "Irlande",
        destination: "Cork",
        image:
            "https://www.nacel.fr/medias/_cache/produits/273/imagePrincipale/1920_1440/anglais-general-cork.jpg"
    }
];
const Travels = () => (
    <div>
        {travels.map((quote, index) => (
            <div key={index}>
                <Travel
                    destination={quote.destination}
                    image={quote.image}
                    pays={quote.pays}
                    distance={quote.distance}
                />
            </div>
        ))}
    </div>
);
export default Travels;

