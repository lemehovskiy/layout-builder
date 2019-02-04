import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Vector from './Vector';
import Handler from './Handler';

import {
    updateMouseCoordinates,
    updateEditMode,
    deselectAllObjects,
    moveObject
} from '../../src/modules/svgRender'

class SvgRender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            svgOffset: {
                x: null,
                y: null
            },
            selectToolActive: false,
            selectToolStartPoint: {
                x: null,
                y: null
            },
            selectToolPosition: {
                x: null,
                y: null
            },
            selectToolSize: {
                width: null,
                height: null
            }
        }
    }

    componentDidMount(){
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

        if (this.state.selectToolActive) {
            
            const width = Math.abs(e.clientX - this.state.svgOffset.x - this.state.selectToolStartPoint.x);
            const height = Math.abs(e.clientY - this.state.svgOffset.y - this.state.selectToolStartPoint.y);
            const x = e.clientX - this.state.svgOffset.x > this.state.selectToolStartPoint.x ? this.state.selectToolStartPoint.x : this.state.selectToolStartPoint.x - width;
            const y = e.clientY - this.state.svgOffset.y > this.state.selectToolStartPoint.y ? this.state.selectToolStartPoint.y : this.state.selectToolStartPoint.y - height;

            console.log('e.clientY - ' + e.clientY);
            console.log('this.state.selectToolStartPoint.y - ' + this.state.selectToolStartPoint.y);
            console.log(y);

            
            this.setState({
                selectToolSize: {
                    width: width,
                    height: height
                },
                selectToolPosition: {
                    x: x,
                    y: y
                }
            })
        }


    }

    onMouseUp() {
        this.props.updateEditMode(null);
        this.setState({
            selectToolActive: false,
            selectToolSize: {
                width: 0,
                height: 0
            }
        })
    }

    onMouseDown(e) {
        if (e.target === e.currentTarget) {
            this.setState({
                selectToolActive: true,
                selectToolStartPoint: {
                    x: e.clientX - this.state.svgOffset.x,
                    y: e.clientY - this.state.svgOffset.y
                }
            })
        }
    }

    onClick(e) {
        if (e.target === e.currentTarget) {
            this.props.deselectAllObjects();
        }
    }

    render() {
        return (
            <div className="container">
                <svg ref="svgRender" width='800' height='500' onClick={this.onClick.bind(this)}
                     onMouseMove={this.onMouseMove.bind(this)} onMouseUp={this.onMouseUp.bind(this)}
                     onMouseDown={this.onMouseDown.bind(this)}>
                    {this.props.objects.map(function (object) {
                        return <Vector key={object.id} object={object}/>
                    })}

                    {this.state.selectToolActive ? <rect
                        strokeWidth="1"
                        stroke="#6298F9"
                        fill="rgba(98, 152, 249, 0.3)"
                        opacity="0.3"
                        x={this.state.selectToolPosition.x}
                        y={this.state.selectToolPosition.y}
                        width={this.state.selectToolSize.width}
                        height={this.state.selectToolSize.height}
                    /> : ''}
                </svg>
                <Handler/>
            </div>
        )
    }
}

const mapStateToProps = ({svgRender}) => ({
    objects: svgRender.objects,
    editMode: svgRender.editMode,
    editStartPoint: svgRender.editStartPoint,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            updateMouseCoordinates,
            updateEditMode,
            deselectAllObjects,
            moveObject
        },
        dispatch
    )


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SvgRender)
