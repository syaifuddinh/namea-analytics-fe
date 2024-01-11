import "./index.style.css";
import DefaultText from "../../../components/atoms/default-text";
import TitleText from "../../../components/atoms/title-text";
import MutationLabel from "../../../components/atoms/mutation-label";
import Image from "next/image"
import ThumbnailIcon from "./index.thumbnail.svg"

export default function MemberOverviewCard({ 
    label, 
    value, 
    mutationValue,
    variant
}) {
  return (
    <div className="member-overview-card p-4 flex justify-between">
        <div className="member-overview-card_body">
            <div className="member-overview-card_label">
                <DefaultText weight="medium">
                    { label }
                </DefaultText>
            </div>
            <div className="member-overview-card_value">
                <TitleText>
                    { value }
                </TitleText>
            </div>

            <MutationLabel
                value={mutationValue}
                variant={variant}
                className="mt-3"
            />
        </div>
        
        <div className="member-overview-card_thumbnail">
            <Image
                src={ThumbnailIcon}
                alt="thumbnail icon"
            />
        </div>
    </div>
  )
}
