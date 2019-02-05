import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Vector from './Vector';
import SelectTool from './SelectTool';
import {getSelectToolSize, getSelectToolPosition, checkRectRectCollision} from './actions/selectTool';
import {getObjectResizeValues} from './actions/resizeTool';
import {getObjectRotateValue} from './actions/rootateTool.js';


import {
    updateEditMode,
    deselectAllObjects,
    moveObject,
    setObjectsSelectState,
    resizeObject,
    resetObjectMode,
    rotateObject
} from '../../src/modules/svgRender'

class SvgRender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectToolActive: false,
            selectToolStartPoint: {
                x: null,
                y: null
            },
            mousePosition: {
                x: null,
                y: null
            },
            svgOffset: {
                x: null,
                y: null
            },
            selectToolSize: {
                x: null,
                y: null
            },
            selectToolPosition: {
                x: null,
                y: null
            }
        }
    }

    componentDidMount() {
        const getBoundingClientRect = this.refs.svgRender.getBoundingClientRect();

        this.setState({
            svgOffset: {
                x: getBoundingClientRect.x,
                y: getBoundingClientRect.y
            }
        })
    }

    onMouseMove(e) {

        let self = this;

        if (this.props.editMode === 'drag') {
            this.props.objects.forEach(function (object) {
                if (object.selected) {
                    self.props.moveObject(object.id, e.clientX - object.editStartPositionOffset.x, e.clientY - object.editStartPositionOffset.y);
                }
            })
        }

        else if (this.props.editMode === 'resize') {
            this.props.objects.forEach(function (object) {
                if (object.mode === 'resize') {
                    let updatedValues = getObjectResizeValues(
                        {x: e.clientX, y: e.clientY},
                        self.props.resizeToolDirection,
                        self.props.editObjectInitState,
                        self.props.mouseStartPosition,
                        {x: object.x, y: object.y, width: object.width, height: object.height}
                    );

                    self.props.resizeObject({
                            id: object.id,
                            ...updatedValues
                        }
                    );
                }
            })
        }

        else if (this.props.editMode === 'rotate') {
            this.props.objects.forEach(function (object) {
                if (object.mode === 'rotate') {

                    let mouse = {x: e.clientX, y: e.clientY},
                        mouseStartPosition = self.props.mouseStartPosition;

                    self.props.rotateObject({
                            id: object.id,
                            rotate: getObjectRotateValue({mouse, mouseStartPosition, object})
                        }
                    );
                }
            })
        }


        if (this.props.editMode === 'selectTool') {
            this.updateSelectToolData({x: e.clientX, y: e.clientY});
        }
    }


    onMouseUp(e) {
        if (this.props.editMode === 'selectTool') {
            this.handleSelectTool();
        }
        else if (this.props.editMode === 'resize') {
            this.props.resetObjectMode();
        }


        this.props.updateEditMode(null);
    }

    onMouseDown(e) {
        if (e.target === e.currentTarget) {
            this.setSelectStartPosition({x: e.clientX, y: e.clientY});
            this.updateSelectToolData({x: e.clientX, y: e.clientY});
            this.props.updateEditMode('selectTool');
        }
    }

    setSelectStartPosition(mousePosition) {
        this.setState({
            selectToolStartPoint: {
                x: mousePosition.x - this.state.svgOffset.x,
                y: mousePosition.y - this.state.svgOffset.y
            }
        })
    }

    handleSelectTool() {
        let self = this;

        this.resetSelectToolData();

        let selectedObjectIds = [];

        this.props.objects.forEach(function (object) {
            if (checkRectRectCollision({
                        x: object.x,
                        y: object.y,
                        width: object.width,
                        height: object.height
                    },
                    {
                        x: self.state.selectToolPosition.x,
                        y: self.state.selectToolPosition.y,
                        width: self.state.selectToolSize.width,
                        height: self.state.selectToolSize.height
                    })) {
                selectedObjectIds.push(object.id);
            }
        })

        this.props.deselectAllObjects();

        if (selectedObjectIds.length) {
            this.props.setObjectsSelectState(selectedObjectIds)
        }
    }

    resetSelectToolData() {
        this.setState({
            selectToolStartPoint: {x: null, y: null},
            selectToolSize: {x: null, y: null}
        });
    }

    updateSelectToolData(mousePosition) {
        if (this.state.selectToolStartPoint.x === null) return;

        const selectToolSize = getSelectToolSize(
            this.state.selectToolStartPoint,
            mousePosition,
            this.state.svgOffset
        );

        this.setState({
            selectToolSize: selectToolSize
        })
        const selectToolPosition = getSelectToolPosition(
            this.state.selectToolStartPoint,
            mousePosition,
            this.state.svgOffset,
            selectToolSize
        );
        this.setState({
            selectToolPosition: selectToolPosition
        })
    }

    render() {
        return (
            <div className="container">
                <svg className="svgRender" ref="svgRender" width='800' height='500'
                     onMouseMove={this.onMouseMove.bind(this)} onMouseUp={this.onMouseUp.bind(this)}
                     onMouseDown={this.onMouseDown.bind(this)}>
                    {this.props.objects.map(function (object) {
                        return <Vector key={object.id} object={object}/>
                    })}


                    {this.props.editMode === 'selectTool' ? <SelectTool
                        selectToolPosition={this.state.selectToolPosition}
                        selectToolSize={this.state.selectToolSize}
                    /> : ''}
                </svg>
            </div>
        )
    }
}

const mapStateToProps = ({svgRender, resizeTool}) => ({
    objects: svgRender.objects,
    editMode: svgRender.editMode,
    mouseStartPosition: svgRender.mouseStartPosition,
    editObjectInitState: svgRender.editObjectInitState,
    resizeToolDirection: resizeTool.resizeDirection
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateEditMode,
            deselectAllObjects,
            moveObject,
            setObjectsSelectState,
            resizeObject,
            resetObjectMode,
            rotateObject
        },
        dispatch
    )


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SvgRender)
