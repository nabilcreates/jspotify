# jspotify
> Control the whole of User's Spotify playback using functions


# Functions:
#### PLEASE NOTE THAT ALL OF THE FUNCTION REQUIRE A BEARER TOKEN WITH ALL SCOPE PREFERABLY
| Function        | Function Name           | Note  | Scope
| :------------- |:-------------|:-----|:---|
| Pause User's Playback      | `spotify_pause(token)` | - | `user-modify-playback-state`
|Set User's Playback Volume|`spotify_set_volume(token,volume)` | volume is in percentage (min: 0, max: 100) | `user-modify-playback-state`
|Skip to Next Track|`spotify_next_track(token)` | - | `user-modify-playback-state`
|Skip to Previous Track|`spotify_previous_track(token)` | - | `user-modify-playback-state`