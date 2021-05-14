import React from 'react';
import { createPortal } from 'react-dom';

const modalStyle = {
	position: 'fixed',
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	backgroundColor: 'rgba(0,0,0,.2)',
	color: '##FFF',
	fontSize: '40px',
};

export default class Modal extends React.Component<any, any> {
	render() {
		return createPortal(
			// @ts-ignore
			<div style={modalStyle} onClick={this.props.onClick}>
				{this.props.children}
			</div>,
			document.getElementById('modal_root') as HTMLElement
		);
	}
}
