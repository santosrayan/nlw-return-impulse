import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentProps {
    feedbackType: FeedbackType;
}

export const FeedbackContentStep = ({feedbackType}: FeedbackContentProps) => { 
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    return(
        <>
            <header>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton /> 
            </header>
            <div className="flex py-8 gap-2 w-full">
                
            </div>
        </>
    )
}