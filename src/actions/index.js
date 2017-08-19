import {FETCH_IMAGES} from "./types";
import fetchJsonp from 'fetch-jsonp';

export const fetchImages = tag => async dispatch => {
    const flickrPublicFeedURL = `https://api.flickr.com/services/feeds/photos_public.gne`;

    try {
        const res = await fetchJsonp(`${flickrPublicFeedURL}?tags=${tag}&format=json`,
            { jsonpCallbackFunction: 'jsonFlickrFeed'});
        const json = await res.json();
        dispatch({type: FETCH_IMAGES, payload: json.items});
    } catch(err) {
        console.log(err);
    }

};