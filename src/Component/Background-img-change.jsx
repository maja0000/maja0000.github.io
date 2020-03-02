import React, { useState } from "react";
// ES Modules syntax
import Unsplash from 'unsplash-js';
import { useEffect } from "react";

const unsplash = new Unsplash({
    accessKey: "t3JDkopXSMtuI43tlU56zyNBkaTUOnbDpP1Tj_N1oBc",
    // Optionally you can also configure a custom header to be sent with every request
    headers: {
        "X-Custom-Header": "foo"
    },
    // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
    timeout: 500 // values set in ms
});

function BackgroundIMG({ weatherDetailsProps }) {
    const [bgImg, setBgImg] = useState('');

    useEffect(() => {

        unsplash.search.photos(weatherDetailsProps.list[0].weather[0].main + ' ' + weatherDetailsProps.city.name, 1)
            .then(toJson => toJson.json())
            .then(json => {
                setBgImg(json.results[0].urls.regular);


            });
    }, [weatherDetailsProps])


    const style = {
        imageDiv: {
            zIndex: -1,
            height: '100vh',
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            backgroundImage: `url('${bgImg}')`
        }
    }
    return (
        <div style={style.imageDiv}>
        </div>
    )
}

export default BackgroundIMG