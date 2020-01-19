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
        KellenPics: [],
        bg1: "../red.jpg",
        bg2: "../red.jpg",
        bg3: "../red.jpg",
        bg4: "../red.jpg",

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
                        // console.log(this.state.AlexPics);
                        // me.push();
                    } else if (cards[1].imageUrl) {
                        this.setState({ AlexPics: [...this.state.AlexPics, cards[1].imageUrl] })
                        // console.log(this.state.AlexPics);
                        // me.push(cards[1].imageUrl);
                    } else {
                        console.log("no")
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
        console.log(this.state.AlexPics)
        console.log(this.state.KellenPics)
        console.log(this.state.StevePics)
    };

    addOne = (playerID) => {
        let playersTotal = document.getElementById(playerID).textContent;
        let playersTotalNumber = Number(playersTotal);
        playersTotalNumber += 1
        document.getElementById(playerID).textContent = playersTotalNumber
    };


    changeUserBG = (imageUrl, userArea) => {
        let thisOne = document.getElementById(userArea);
        console.log(this.state.AlexPics[0])
        if (thisOne === "one") {
            this.setState({ bg1: this.state.AlexPics[0] })
            console.log("yes")
        }

    };



    // rendering of our page
    render() {

        return (
            <>
                <div className="row">

                    <div className="col-6" id="one" style={{ backgroundImage: `url(${this.state.bg1})` }}>

                        <div className="">

                            <p className="lifeArea">
                                <button className="minusOne" onClick={() => { this.subtractOne("playerOne") }}>-1</button>
                                <span id="playerOne">40</span>
                                <button className="plusOne" onClick={() => { this.addOne("playerOne") }}>+1</button>
                            </p>

                            {/* Theme Modal that has ASK sub modals */}
                            <p className="bgCheckButton">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">Theme</button>
                            </p>


                        </div>

                    </div>

                    <div className="col-6" id="two">

                        <div className="">

                            <p className="lifeArea">
                                <button className="minusOne" onClick={() => { this.subtractOne("playerTwo") }}>-1</button>
                                <span id="playerTwo">40</span>
                                <button className="plusOne" onClick={() => { this.addOne("playerTwo") }}>+1</button>
                            </p>

                        </div>

                    </div>

                </div>

                <div className="row">

                    <div className="col-6" id="three">
                        <div className="">

                            <p className="lifeArea">
                                <button className="minusOne" onClick={() => { this.subtractOne("playerThree") }}>-1</button>
                                <span id="playerThree">40</span>
                                <button className="plusOne" onClick={() => { this.addOne("playerThree") }}>+1</button>
                            </p>

                        </div>
                    </div>

                    <div className="col-6" id="four">
                        <div className="">

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
                                <div className="list-group">
                                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#alexModal">Alex</button>
                                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#steveModal">Steve</button>
                                    <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#kelModal">Kellen</button>
                                    <button className="btn btn-primary">Blue</button>
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
                                <div className="list-group">

                                    <button type="submit" onClick={() => this.changeUserBG(this.state.AlexPics[0], "one")} className="btn btn-danger">Kaalia of the Vast</button>
                                    <button className="list-group-item list-group-item-action">The Gitrog Monster</button>
                                    <button className="list-group-item list-group-item-action">Golos, Tireless Pilgrim</button>
                                    <button className="list-group-item list-group-item-action">Urza, Lord High Artificer</button>
                                    <button className="list-group-item list-group-item-action">Korvold, Fae-Cursed King</button>
                                </div>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                        </div>
                    </div>
                </div>


                {/* Steve Modal */}
                <div className="modal fade" id="steveModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="list-group">

                                    <button onClick={this.changeUserBG(this.state.AlexPics[0], "one")} className="list-group-item list-group-item-action">Kaalia of the Vast</button>
                                    <button className="list-group-item list-group-item-action">The Gitrog Monster</button>
                                    <button className="list-group-item list-group-item-action">Golos, Tireless Pilgrim</button>
                                    <button className="list-group-item list-group-item-action">Urza, Lord High Artificer</button>
                                    <button className="list-group-item list-group-item-action">Korvold, Fae-Cursed King</button>
                                </div>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                        </div>
                    </div>
                </div>


                {/* Kellen Modal */}
                <div className="modal fade" id="kelModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="list-group">

                                    <button onClick={this.changeUserBG(this.state.AlexPics[0], "one")} className="list-group-item list-group-item-action">Kaalia of the Vast</button>
                                    <button className="list-group-item list-group-item-action">The Gitrog Monster</button>
                                    <button className="list-group-item list-group-item-action">Golos, Tireless Pilgrim</button>
                                    <button className="list-group-item list-group-item-action">Urza, Lord High Artificer</button>
                                    <button className="list-group-item list-group-item-action">Korvold, Fae-Cursed King</button>
                                </div>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                        </div>
                    </div>
                </div>



            </>
        )
    }
};

export default Main;