import React, { Component } from "react";
import mtg from "mtgsdk";
import "./Main.css";


class Main extends Component {

    state = {
        Alex: [
            "Kaalia of the Vast",
            "The Gitrog Monster",
            "Golos, Tireless Pilgrim",
            "Urza, Lord High Artificer",
            "Korvold, Fae-Cursed King",
        ],
        Kellen: [
            "Zur the Enchanter",
            "Chulane, Teller of Tales",
            "Kenrith, the Returned King",
        ],
        Steve: [
            "Gisela, Blade of Goldnight",
            "The Scarab God",
            "Feather, the Redeemed",
        ],
        AlexPics: [],
        StevePics: [],
        KellenPics: []
    };



    // on page load function, in this case it calls Image search function
    componentDidMount = () => {
        this.fetchImageURLSfromAPI();
    };

    // the image search function
    fetchImageURLSfromAPI = () => {

        // greedy me search 
        for (let i = 0; i < this.state.Alex.length; i++) {
            mtg.card.where({
                name: this.state.Alex[i]
            })
                .then(cards => {

                    if (cards[0].imageUrl) {
                        this.setState({ AlexPics: [...this.state.AlexPics, cards[0].imageUrl] })
                        // me.push();
                    } else {
                        this.setState({ AlexPics: [...this.state.AlexPics, cards[1].imageUrl] })
                        // me.push(cards[1].imageUrl);
                    }
                })
        };

        //Steve Search
        for (let i = 0; i < this.state.Steve.length; i++) {
            mtg.card.where({
                name: this.state.Steve[i]
            })
                .then(cards => {
                    if (cards[0].imageUrl) {
                        this.setState({ StevePics: [...this.state.StevePics, cards[0].imageUrl] })
                    } else {
                        this.setState({ StevePics: [...this.state.StevePics, cards[1].imageUrl] })
                    }
                })
        };

        // Kellen Search
        for (let i = 0; i < this.state.Kellen.length; i++) {
            mtg.card.where({
                name: this.state.Kellen[i]
            })
                .then(cards => {
                    if (cards[0].imageUrl) {
                        this.setState({ KellenPics: [...this.state.KellenPics, cards[0].imageUrl] })
                    } else {
                        this.setState({ KellenPics: [...this.state.KellenPics, cards[1].imageUrl] })
                    }
                })
        };

    };


    // life total button functions
    subtractOne = (playerID) => {
        let playersTotal = document.getElementById(playerID).textContent;
        playersTotal -= 1
        document.getElementById(playerID).textContent = playersTotal
    };

    addOne = (playerID) => {
        let playersTotal = document.getElementById(playerID).textContent;
        let playersTotalNumber = Number(playersTotal);
        playersTotalNumber += 1
        document.getElementById(playerID).textContent = playersTotalNumber
    };


    // rendering of our page
    render() {
        return (
            <>
                <div className="row">

                    <div className="one col-6">

                        <div className="playBox">

                            <p className="lifeArea">
                                <button className="minusOne" onClick={() => { this.subtractOne("playerOne") }}>-1</button>
                                <span id="playerOne">40</span>
                                <button className="plusOne" onClick={() => { this.addOne("playerOne") }}>+1</button>
                            </p>
                            <p className="bgCheckButton">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">Theme</button>
                            </p>


                        </div>

                    </div>

                    <div className="two col-6">

                        <div className="playBox">

                            <p className="lifeArea">
                                <button className="minusOne" onClick={() => { this.subtractOne("playerTwo") }}>-1</button>
                                <span id="playerTwo">40</span>
                                <button className="plusOne" onClick={() => { this.addOne("playerTwo") }}>+1</button>
                            </p>

                        </div>

                    </div>

                </div>

                <div className="row">

                    <div className="three col-6">
                        <div className="playBox">

                            <p className="lifeArea">
                                <button className="minusOne" onClick={() => { this.subtractOne("playerThree") }}>-1</button>
                                <span id="playerThree">40</span>
                                <button className="plusOne" onClick={() => { this.addOne("playerThree") }}>+1</button>
                            </p>

                        </div>
                    </div>

                    <div className="four col-6">
                        <div className="playBox">

                            <p className="lifeArea">
                                <button className="minusOne" onClick={() => { this.subtractOne("playerFour") }}>-1</button>
                                <span id="playerFour">40</span>
                                <button className="plusOne" onClick={() => { this.addOne("playerFour") }}>+1</button>
                            </p>

                        </div>
                    </div>

                </div>

                {/* END OF PLAYER SQUARES AND START OF MODALS */}

                {/* THEME MODAL */}
                <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div class="list-group">
                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#alexModal">Alex</button>
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alex Modal */}
                <div className="modal fade" id="alexModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div class="list-group">
                                    
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                    <button className="list-group-item list-group-item-action">Blue</button>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>





            </>
        )
    }
};

export default Main;