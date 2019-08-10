import React from 'react'
// import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below

// const Nav = props => (
// 	<NavLink
// 		exact
// 		{...props}
// 		activeClassName="active"
// 	/>
// );

// const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

// const welcomeLabel = createLabel("home", "Home Page")
// const characterLabel = createLabel("users", "Characters")

// const panes = [
//   { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
//   { menuItem: <Menu.Item key='characters' as={Nav} to={`/characters`} content={characterLabel} /> }
// ]

// const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

const TabNav = () => {
	const tabsData = [
		{name: "Characters", link: "/characters"},
		{name: "Locations", link: "/locations"},
		{name: "Episodes", link: "/episodes"}
	]
	return(
		<div className="tabs">
			<ul>
				{tabsData.map(tab => (
					<li key={tab.name}>
						<NavLink to={tab.link}>{tab.name}</NavLink>
					</li>
				))}
			</ul>
		</div>
	)
}
export default TabNav
