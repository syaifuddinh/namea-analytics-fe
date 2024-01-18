import Menubar from "@/components/molecules/menubar"
import "./index.style.css";

const MainLayout = ({ children }) => {
	return (
		<div className="main-layout">
			<div className="main-layout_menubar py-[10px] px-[92px]">
				<Menubar />
			</div>

			<div className="main-layout_content px-[92px] pb-[60px]">
				{ children }
			</div>
		</div>
	)
}

export default MainLayout;