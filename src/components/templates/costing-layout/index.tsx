import Submenu from "@/components/organisms/costing/submenu"
import Divider from "@/components/atoms/divider"

export default function CostingLayout({ children, activeMenu = "" }) {
	return (
		<>
			<Submenu />
	      	<Divider className="absolute left-0" />
	      	<div className="mt-[2.75rem]">
	      		{ children }
	      	</div>
		</>
	)
}