export default function Carousel(props: any) {



// rework this
    return(
        <div className="carousel flex justify-center content-center w-full">


            <div id="slide1" className="carousel-item relative w-96">
                <img src={`${props.link}`} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

        
        </div>

    )
}
