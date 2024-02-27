const menus = [
	{
		"id": "operational-costing",
		"name": "Operational Costing",
		"url": "/costing",
		"description": "To run company operations."
	},
	{
		"id": "promotional-costing",
		"name": "Promotional Costing",
		"url": "/costing/promotional",
		"description": "Marketing or promotional activity."
	},
	{
		"id": 3,
		"name": "Other Costing",
		"url": "/costing",
		"description": null
	}
]

export default function Submenu({ activeMenu }) {
	return (
		<div className="costing-submenu flex gap-[0.625rem] items-center h-[52px]">
			{ menus.map(item => (
				<a
					key={item.id}
					href={item.url}
					className={`flex gap-[0.75rem] justify-center items-center rounded-[21.321px] border bg-base-bg3 border-base-bg3 text-gray-6 text-sm font-extralight max-h-[2rem] min-h-[2rem] cursor-pointer ${activeMenu !== item.id ? "px-3" : " pl-[3px] pr-3"}`}
				>
					<div className={(activeMenu === item.id ? "px-[0.625rem] bg-base-bg3 h-[24px] flex items-center rounded-[21.312px] text-gray-10" : "")}>
						{ item.name }	
					</div>

					{ activeMenu === item.id && (
						<div>
							{ item.description }
						</div>
					) }
				</a>
			)) }
		</div>
	)
}