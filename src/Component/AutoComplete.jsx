import React, { useState, useEffect, useRef } from 'react';

const Auto = ({ onInput, onKeyPress }) => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);
    const suggestions = [];
    useEffect(() => {

        fetch('https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apikey=wMUjz7aAp9K1K_Rzxs6cfwXWRXlgh2RTmtv_0jgzSp8&query=' + search + ' & beginHighlight=')
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                var op = data.suggestions.filter((suggest) => {
                    return suggest.matchLevel === 'city'
                }).map(function (o) {
                    suggestions.push(o.address.city)
                    return {
                        label: o.address.city,
                        locationId: o.locationId
                    }
                })
            });
    }
        else {
    suggestions = [];
}
setOptions(suggestions);
    }, [search]);
useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
        window.removeEventListener("mousedown", handleClickOutside);
    };
});
const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
        setDisplay(false);
    }
};
const updatePokeDex = poke => {
    setSearch(poke);
    setDisplay(false);
};
return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
        <input
            id="auto"
            onClick={() => { setDisplay(!display) }}
            placeholder="Type to search"
            value={search}
            onChange={event => { onInput(event); setSearch(event.target.value) }}
        />
        {display && (
            <div className="autoContainer">
                {
                    options
                        .map((value, i) => {
                            console.log('options filter', value)
                            return (
                                <div
                                    onClick={() => updatePokeDex(value)}
                                    className="option"
                                    key={i}
                                    tabIndex="0"
                                >
                                    <span>{value}</span>

                                </div>
                            );
                        })}
            </div>
        )}
    </div>
);
};
export default Auto;

//function App() {
 //   return (
   //     <div className="App">
     //       <h1>Custom AutoComplete React</h1>
       //     <div className="logo"></div>
         //   <div className="auto-container">
           //     <Auto />
            //</div>
       // </div>
   // );
//}
