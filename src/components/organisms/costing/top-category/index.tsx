import Card from "@/components/atoms/card"
import CategoryCard from "./category-card"

const items = [
    {
        "id": 1,
        "title": "Category Event Name",
        "subtitle": "Top 1",
        "progress": 75
    },
    {
        "id": 2,
        "title": "Category Event Name",
        "subtitle": "Top 2",
        "progress": 64
    },
    {
        "id": 3,
        "title": "Category Event Name",
        "subtitle": "Top 3",
        "progress": 60
    },
    {
        "id": 4,
        "title": "Category Event Name",
        "subtitle": "Top 4",
        "progress": 57
    },
    {
        "id": 5,
        "title": "Category Event Name",
        "subtitle": "Top 5",
        "progress": 52
    },
    {
        "id": 6,
        "title": "Category Event Name",
        "subtitle": "Top 6",
        "progress": 44
    },
]

const Header = () => (
	<div className="flex px-5 rounded-t-[12px] border-t border-base-bg3 items-center h-[64px] bg-base-bg5">
		<div className="font-light leading-6 text-gray-10">
			Top Category
		</div>
	</div>
)

export default function TopCategory({ className = "" }) {
	return (
		<Card
			headerElement={<Header />}
			paddingTop="6px"
			className={className}
		>
			<div className="grid grid-cols-2 gap-5">
				{ items.map(item => (
					<CategoryCard
						title={item.title}
						subtitle={item.subtitle}
						progress={item.progress}
					/>
				)) }
			</div>
		</Card>
	)
}