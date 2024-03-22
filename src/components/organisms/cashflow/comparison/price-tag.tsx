import MoneyText from "@/components/atoms/text/money"
import "./price-tag.style.css"

export default function PriceTag({ title, price, variant }) {
	return (
		<div className="price-tag flex items-center justify-between border border-[var(--Gray1)] rounded-lg min-h-[2.5rem] px-4">
			<div className="price-tag_title text-sm text-[var(--Gray6)] font-extralight">
				{ title }
			</div>

			<MoneyText
				variant={variant}
			>
				{ price }
			</MoneyText>
		</div>
	)
}