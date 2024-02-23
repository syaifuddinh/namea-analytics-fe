const menus = [
	{
		"id": 1,
		"name": "Operational Costing",
		"description": "To run company operations"
	},
	{
		"id": 2,
		"name": "Promotional Costing",
		"description": null
	},
	{
		"id": 3,
		"name": "Other Costing",
		"description": null
	}
]

export default function Submenu() {
	return (
		<div className="costing-submenu flex gap-2 items-center h-[52px]">
			{ menus.map(item => (
				<div
					key={item.id}
					className={`flex gap-3 justify-center items-center rounded-[21.321px] border bg-base-bg3 border-base-bg3 text-gray-6 text-sm font-extralight max-h-[2rem] min-h-[2rem] cursor-pointer ${!item.description ? "px-3" : " pl-[3px] pr-3"}`}
				>
					<div className={(item.description ? "px-3 bg-base-bg3 h-[24px] flex items-center rounded-[21.312px] text-gray-10" : "")}>
						{ item.name }	
					</div>

					{ item.description && (
						<div>
							{ item.description }
						</div>
					) }
				</div>
			)) }
		</div>
	)
}