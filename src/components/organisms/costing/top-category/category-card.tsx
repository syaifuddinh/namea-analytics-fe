export default function CategoryCard({ title, subtitle, progress }) {
	return (
		<div>
			<div>{ subtitle }</div>
			<div>
				<div>{ title }</div>
				<div>{ progress }</div>
			</div>
		</div>
	)
}