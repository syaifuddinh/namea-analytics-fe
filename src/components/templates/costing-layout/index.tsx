import Submenu from "@/components/organisms/costing/submenu"
import Divider from "@/components/atoms/divider"

export default function CostingLayout({ 
	children, 
	activeMenu = "",
	contentMarginTop = "2.75rem"
}) {
	return (
		<>
			<Submenu activeMenu={activeMenu} />
	      	<Divider className="absolute left-0" />
	      	<div
	      		style={{"marginTop": contentMarginTop}}
	      	>
	      		{ children }
	      	</div>
		</>
	)
}