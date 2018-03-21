export const UPDATE_PAGE = 'page:updatePage';
export function updatePage(newPage) {
    return {
        type: UPDATE_PAGE,
        payload: {
            page: newPage
        }
    }
}