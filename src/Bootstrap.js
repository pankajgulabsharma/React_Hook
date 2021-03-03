import React from 'react'

const Bootstrap = () => {
    return (
        <div>
            {/* <div className="card" style={{width: "18rem"}}>
                <img src="logo512.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div> */}
            <h1 className="text-center">Welcome to Bootstrap</h1>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="https://picsum.photos/250/250" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="https://picsum.photos/250/250" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="https://picsum.photos/250/250" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bootstrap;
