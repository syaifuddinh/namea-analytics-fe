import Icon from "@/components/atoms/icon"

const UserProfile = () => {
	return (
		<div className="menubar_user-profile flex items-center">
			<div className="menubar_user-profile_photo mr-3">
				<img
					src="/images/avatar.svg"
					alt="profile-photo"
					className="w-[32px] h-[32px]"
				/>	
			</div>
			<div className="menubar_user-profile_user">
				<div className="menubar_user-profile_greeting text-xs font-light">
					Let explore
				</div>
				<div className="menubar_user-profile_username text-sm flex items-center gap-2 cursor-pointer leading-5 text-[#DFF4F6]">
					<div>
						Julia D. Quon
					</div>

					<Icon
						src="transparent/chevron-down.svg"
						alt="dropdown-menu-button"
						className="w-[12px] h-[12px]"
					/>
				</div>
			</div>
		</div>
	)	
}

export default UserProfile;