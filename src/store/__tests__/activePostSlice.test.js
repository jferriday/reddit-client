import {
    startFetchPost,
    fetchPostSuccess,
    fetchPostFailed,
    setActivePostUrl,
    setActivePost,
} from '../activePostSlice';

describe('actions', () => {
    test('startFetchPost should create correct action', () => {
        const expectedAction = {
            type: 'activePost/startFetchPost',
            payload: undefined
        };
        expect(startFetchPost()).toEqual(expectedAction);
    });

    test('fetchPostSuccess should create expected action', () => {
        const expectedAction = {
            type: 'activePost/fetchPostSuccess',
            payload: undefined
        };

        expect(fetchPostSuccess()).toEqual(expectedAction);
    });

    test('fetchPostFailed should create expected action', () => {
        const expectedAction = {
            type: 'activePost/fetchPostFailed',
            payload: undefined
        };
        expect(fetchPostFailed()).toEqual(expectedAction);
    });

    test('setActivePostUrl should create expected aciton & payload', () => {

        const payload = {
            postPermalink: 'https://example.com./example.json',
            activePost: {
                post: 'example'
            },
            isLoading: false,
            failedLoading: false 
        }
        const expectedAction = {
            type: 'activePost/setActivePostUrl',
            payload: {
                postPermalink: 'https://example.com./example.json',
                activePost: {
                    post: 'example'
                },
                isLoading: false,
                failedLoading: false 
            }
        }
        expect(setActivePostUrl(payload)).toEqual(expectedAction);
    })

    test('setActivePost should create expected action & payload' ,() => {
        const payload = {
            postPermalink: 'https://example.com./example.json',
            activePost: {
                post: 'example'
            },
            isLoading: false,
            failedLoading: false 
        }
        const expectedAction = {
            type: 'activePost/setActivePost',
            payload: {
                postPermalink: 'https://example.com./example.json',
                activePost: {
                    post: 'example'
                },
                isLoading: false,
                failedLoading: false 
            }
        }

            expect(setActivePost(payload)).toEqual(expectedAction);
    })
})