import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";

class NavigationBar extends Component {
	state = {
		isOpen: false,
	};
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};
	onClick = () => {
		localStorage.setItem("token", "");
	};
	render() {
		const { isOpen } = this.state;

		return (
			<div>
				<Navbar color="light" light expand="lg" className="mb-5">
					<NavbarBrand href="/" className="col-6" style={{ marginLeft: "12%" }}>
						SecureWeb
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="col-auto" navbar>
							<NavItem className="col-12">
								<NavLink href="/signup" style={!isOpen ? {} : toggleStyle}>
									register
								</NavLink>
							</NavItem>
							<NavItem className="col-12">
								<NavLink href="/login" style={!isOpen ? {} : toggleStyle}>
									login
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="/"
									className="col-12"
									style={!isOpen ? {} : toggleStyle}
									onClick={this.onClick}>
									{" "}
									logout
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

const toggleStyle = {
	background: "#eaeaea",
	border: "1px solid #fff",
	color: "#333",
	paddingLeft: "15%",
	fontFamily: '"Times New Roman, Times, serif"',
};
export default NavigationBar;
