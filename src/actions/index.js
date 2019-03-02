import {
    UPDATE_EDIT_MODE,
    SET_MOUSE_START_POSITION,
    SELECT_OBJECTS,
    DESELECT_ALL_OBJECTS,
    DESELECT_ALL_OBJECTS_EXEPT,
    MOVE_OBJECT,
    SET_OBJECT_EDIT_START_POSITION,
    RESIZE_OBJECTS,
    ROTATE_OBJECT,
    SET_TEXT_ALIGN,
    SET_VERTICAL_ALIGN,
    SET_FILL_COLOR,
    SET_STROKE_COLOR,
    SET_STROKE_WIDTH,
    ADD_NEW_OBJECT
} from './../constants';


export const updateEditMode = (mode) => {
    return dispatch => {
        dispatch({
            type: UPDATE_EDIT_MODE,
            mode: mode
        })

    }
}

export const setMouseStartPosition = (x, y) => {
    return dispatch => {
        dispatch({
            type: SET_MOUSE_START_POSITION,
            x: x,
            y: y
        })

    }
}

export const selectObjects = (ids) => {
    return dispatch => {
        dispatch({
            type: SELECT_OBJECTS,
            payload: {ids}
        })
    }
}

export const deselectAllObjects = () => {
    return dispatch => {
        dispatch({
            type: DESELECT_ALL_OBJECTS,
        })
    }
}

export const deselectAllObjectsExept = (id) => {
    return dispatch => {
        dispatch({
            type: DESELECT_ALL_OBJECTS_EXEPT,
            payload: id
        })
    }
}


export const moveObject = (payload) => {
    return dispatch => {
        dispatch({
            type: MOVE_OBJECT,
            payload: payload
        })
    }
}

export const setObjectEditStartPosition = (x, y) => {
    return dispatch => {
        dispatch({
            type: SET_OBJECT_EDIT_START_POSITION,
            payload: {
                x: x,
                y: y
            }
        })
    }
}


export const resizeObjects = (props) => {
    return dispatch => {
        dispatch({
            type: RESIZE_OBJECTS,
            payload: props
        })
    }
}

export const rotateObject = ({id, rotate}) => {
    return dispatch => {
        dispatch({
            type: ROTATE_OBJECT,
            payload: {id, rotate}
        })
    }
}

export const setTextAlign = (value) => {
    return dispatch => {
        dispatch({
            type: SET_TEXT_ALIGN,
            payload: {value}
        })
    }
}

export const setVerticalAlign = (value) => {
    return dispatch => {
        dispatch({
            type: SET_VERTICAL_ALIGN,
            payload: {value}
        })
    }
}

export const setFillColor = (value) => {
    return dispatch => {
        dispatch({
            type: SET_FILL_COLOR,
            payload: {value}
        })
    }
}

export const setStrokeColor = (value) => {
    return dispatch => {
        dispatch({
            type: SET_STROKE_COLOR,
            payload: {value}
        })
    }
}

export const setStrokeWidth = (value) => {
    return dispatch => {
        dispatch({
            type: SET_STROKE_WIDTH,
            payload: {value}
        })
    }
}

export const addNewObject = (object) => {
    return dispatch => {
        dispatch({
            type: ADD_NEW_OBJECT,
            payload: {
                object: object
            }
        })
    }
}