import Menubar from "@/components/molecules/menubar"
import "./index.style.css";

const MainLayout = ({ children }) => {
	return (
		<div className="main-layout">
			<div className="main-layout_menubar py-4">
				<Menubar />
			</div>

			<div className="main-layout_content">
				{ children }
			</div>
		</div>
	)
}

export default MainLayout;