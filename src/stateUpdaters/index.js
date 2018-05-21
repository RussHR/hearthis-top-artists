import { cloneDeep, findIndex } from 'lodash';

/**
 * Uses a previous artists state object and updates via a list of tracks
 *
 * @param {array} prevArtists - all the artists in the previous state
 * @param {array} tracks - objects with data for the top tracks
 * @returns {array} an array with new artists and updated artists
 */
export function useTrackstoAddArtists(prevArtists, tracks) {
    const artists = cloneDeep(prevArtists);

    tracks.forEach(track => {
        if (!track) {
            return;
        }

        const indexOfCurrentArtist = findIndex(artists, ['id', track.user.id]);
        if (indexOfCurrentArtist === -1){
            const { id, avatar_url, username, permalink_url, uri } = track.user;
            artists.push({
                id,
                avatar_url,
                username,
                permalink_url,
                uri,
                songs: [track]
            });
        } else {
            // add the song to the artist only if it isn't there already
            const { songs } = artists[indexOfCurrentArtist];
            if (findIndex(songs, ['id', track.id]) === -1) {
                songs.push(track);
            }
        }
    });

    return artists;
}