import Item from "./item"

const CurrencyTooltip = ({ ethereumPrice, bitcoinPrice }) => {
	return (
		<div className="bg-[#092B2D] w-[225px] border rounded-lg border-[var(--Gray1)]">
			<Item
				title="Ethereum"
				price={ethereumPrice}
				variant="primary"
			/>
			<Item
				title="Bitcoin"
				price={bitcoinPrice}
				index={1}
				variant="secondary"
			/>
		</div>
	)
}

export default CurrencyTooltip;