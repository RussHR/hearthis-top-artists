/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import React from 'react';
import { findIndex } from 'lodash';

import { useTrackstoAddArtists } from './index';

describe('stateUpdaters', () => {

    describe('useTrackstoAddArtists', () => {

        it('should return a new array representing the state', () => {
            const oldArtists = [];
            const newArtists = useTrackstoAddArtists(oldArtists, []);
            expect(newArtists).to.not.equal(oldArtists);
        });

        it('should add a new artist to the state with a track', () => {
            const mockTrack = {
                title: 'Mock Song',
                user: {
                    id: 1234
                }
            };
            const mockArtist = {
                id: 2345,
                songs: [{
                    title: 'Other Mock Song',
                    user: {
                        id: 2345
                    }
                }]
            };
            const oldArtists = [mockArtist];
            const newArtists = useTrackstoAddArtists(oldArtists, [mockTrack]);

            expect(newArtists).to.have.lengthOf(2);
            expect(findIndex(newArtists, ['id', 2345])).to.equal(0);
            expect(findIndex(newArtists, ['id', 1234])).to.equal(1);
            expect(newArtists[1]['id']).to.equal(1234);
        });

        it('should add new tracks to an existing artist', () => {
            const mockTrack1 = {
                title: 'Mock Song 1',
                user: {
                    id: 1234
                }
            };
            const mockTrack2 = {
                title: 'Mock Song 2',
                user: {
                    id: 1234
                }
            };
            const mockArtist1234 = {
                id: 1234,
                songs: [{
                    title: 'Old Mock Song',
                    user: {
                        id: 1234
                    }
                }]
            };
            const mockArtist2345 = {
                id: 2345,
                songs: [{
                    title: 'Other Mock Song',
                    user: {
                        id: 2345
                    }
                }]
            };
            const oldArtists = [mockArtist1234, mockArtist2345];
            const newArtists = useTrackstoAddArtists(oldArtists, [mockTrack1, mockTrack2]);

            expect(newArtists).to.have.lengthOf(2);
            expect(newArtists[0]['songs']).to.have.lengthOf(3);
            expect(newArtists[0]['songs'][1]).to.deep.equal(mockTrack1);
            expect(newArtists[0]['songs'][2]).to.deep.equal(mockTrack2);
        });

        it('should not add a track to an artist if it already exists', () => {
            const mockTrack = {
                title: 'Mock Song',
                user: {
                    id: 1234
                }
            };
            const mockArtist = {
                id: 1234,
                songs: [mockTrack]
            };
            const oldArtists = [mockArtist];
            const newArtists = useTrackstoAddArtists(oldArtists, [mockTrack]);

            expect(newArtists).to.have.lengthOf(1);
            expect(newArtists[0]['id']).to.equal(1234);
        });
    });
});