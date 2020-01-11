import React, { Component } from "react";
import mtg from "mtgsdk";

class Main extends Component {


    state = {
        Alex: [
            "Kaalia of the Vast", "The Gitrog Monster", "Golos, Tireless Pilgrim", "Urza, Lord High Artificer"
        ],
        Kellen: [],
        Steve: [],
        // AlexPics: [],
    }

    componentDidMount = () => {
        this.fetchImageURLSfromAPI()
    };

    fetchImageURLSfromAPI = () => {

        const AlexPics = [];

        for (let i = 0; i < this.state.Alex.length; i++) {

            mtg.card.where({
                name: this.state.Alex[i]
            })
                .then(cards => {
                    if (cards[0].imageUrl) {

                        AlexPics.push(cards[0].imageUrl);
                        console.log(AlexPics)
                    } else {

                        AlexPics.push(cards[1].imageUrl);
                        console.log(AlexPics)
                    }
                })
        }
    }


    render() {

        return (
            <div className="body">
                Hello
            </div>
        )
    }


}

export default Main;