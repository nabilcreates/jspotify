let pause_uri = 'https://api.spotify.com/v1/me/player/pause'
let volume_uri = 'https://api.spotify.com/v1/me/player/volume'
let next_uri = 'https://api.spotify.com/v1/me/player/next'
let previous_uri = 'https://api.spotify.com/v1/me/player/previous'


function spotify_pause(token){
    fetch(pause_uri, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

function spotify_set_volume(token, volume){

    typeof volume !== 'number' ? volume = 50 : null
    
    fetch(`${volume_uri}?volume_percent=${volume}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

function spotify_next_track(token){

    fetch(next_uri, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

function spotify_previous_track(token){

    fetch(previous_uri, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}