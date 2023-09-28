import React, { useCallback, useState, useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const apiKey = process.env.REACT_APP_GOOGLE_MAP_APIKEY;

export default function FindNearby() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries: ["places"],
    region: "AU",
    language: "en-AU",
  });

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [placeDetails, setPlaceDetails] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const center = useMemo(() => ({ lat: -37.8136, lng: 144.9631 }), []);
  const placesService = useMemo(() => {
    if (window.google && window.google.maps && map) {
      return new window.google.maps.places.PlacesService(map);
    }
    return null;
  }, [map]);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleSearch = () => {
    const searchQuery = "clinical centres at";
    const searchString = searchQuery + " " + userInput;

    if (userInput.trim() === "") {
      setError("Please enter your postcode");
      return;
    }

    if (userInput.length !== 4) {
      setError("Postcode should contains four numbers. For example: 3000");
      return;
    }

    if (!map) {
      setError("Map is not yet loaded. Please wait a moment.");
      return;
    }

    // Clear existing place details
    setPlaceDetails([]);
    setError("");

    const request = {
      query: searchString,
      fields: ["name", "formatted_address", "place_id", "geometry"],
      componentRestrictions: {
        country: "AU", // Restrict the search to Australia
      },
    };

    placesService.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        // Clear existing markers
        markers.forEach((marker) => {
          marker.setMap(null);
        });

        // Process the search results and display them on the map
        const bounds = new window.google.maps.LatLngBounds();
        const newMarkers = [];

        results.forEach((place) => {
          const marker = new window.google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
          });

          getPlaceDetails(place.place_id, placesService);

          newMarkers.push(marker);

          bounds.extend(place.geometry.location);
        });

        setMarkers(newMarkers);
        map.fitBounds(bounds);
      } else {
        setError(`No result for ${userInput}. Please try again.`);
      }
    });
  };

  function getPlaceDetails(placeId, service) {
    const request = {
      placeId: placeId,
      fields: ["name", "formatted_address", "place_id", "geometry"],
    };

    service.getDetails(request, (place, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        // Push places into the array for rendering
        setPlaceDetails((prevPlaceDetails) => [...prevPlaceDetails, place]);
      }
    });
  }

  const renderPlaceDetails = () => {
    return placeDetails.map((place, index) => (
      <div key={index} className="place-detail h-auto p-4 bg-white rounded-lg">
        <p className="text-center">{place.name}</p>
        <p className="text-left text-gray-400 mt-2">
          {place.formatted_address}
        </p>
      </div>
    ));
  };

  return (
    <div className="mt-12">
      <div className="header-wrapper text-center">
        <h1>Find nearby clinical centres</h1>
        <p className="mt-4 mb-8 w-full lg:w-1/2 mx-auto">
          Your doctor or healthcare professional is the best person to recommend
          the right treatment for you. Visiting an HIV clinic is highly
          recommended.
        </p>
      </div>

      <div className="searchbar-container w-1/2 mx-auto my-8">
        <form id="places-searchbar">
          <div className="searchbar bg-white flex flex-row justify-between items-center p-2 rounded-xl">
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full px-4 py-2 mr-4"
              type="number"
              placeholder="Enter your location postcode"
            />
            <button
              className="bg-primaryLight text-lg font-medium px-4 py-2 rounded-xl hover:text-white hover:bg-primary transition-colors duration-75"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </form>
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </div>

      {isLoaded ? (
        <div className="w-full">
          <GoogleMap
            className="map-container"
            mapContainerStyle={{
              width: "60%",
              height: "350px",
              borderRadius: "10px",
              border: "1px solid",
              margin: "0px auto",
            }}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{ streetViewControl: false }}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.getPosition()} />
            ))}
            <></>
          </GoogleMap>

          {userInput !== "" ? (
            <div className="w-full px-10 mt-8 mx-auto">
              <h4>Results for {userInput}</h4>
              <p>
                The results below only showing nearby clinics and may not
                contains HIV professional clinics. If you want to find a
                prescriber for HIV, please use{" "}
                <a
                  className="link"
                  href="https://ashm.org.au/prescriber-programs/find-a-prescriber/hiv-map/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ASHM Prescriber Map.
                </a>
              </p>

              <div className="result-container grid grid-cols-6 gap-4 mt-6">
                {renderPlaceDetails()}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
