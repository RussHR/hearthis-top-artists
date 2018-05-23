/**
 * Converts a string representation of seconds into minute notation, e.g. '74' yields '1:14'
 *
 * @param {string} seconds - string representation of seconds
 * @returns {string} notation of argument seconds with minutes, like a clock
 */

export function secondsToMinutesWithSeconds(seconds) {
    const secondsInt = parseInt(seconds, 10);
    const minutes = Math.floor(secondsInt / 60);
    const leftoverSeconds = secondsInt % 60 < 10 ? `0${secondsInt % 60}` : secondsInt % 60;
    return `${minutes}:${leftoverSeconds}`;
}