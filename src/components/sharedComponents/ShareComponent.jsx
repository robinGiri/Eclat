import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  InstapaperShareButton,
  InstapaperIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

const ShareComponent = ({ shareUrl, quote }) => {
  return (
    <div className="flex gap-5">
      <FacebookShareButton url={shareUrl} quote={quote} hashtag={"#eclate"}>
        <FacebookIcon size={35} className="rounded-[50%] hover:filter-none opacity-80 hover:opacity-100 fill-neutral-600 hover:fill-original-color"
/>
      </FacebookShareButton>

      <WhatsappShareButton url={shareUrl} quote={quote} hashtag={"#eclate"}>
        <WhatsappIcon size={35}  className="rounded-[50%] hover:filter-none opacity-80 hover:opacity-100 fill-neutral-600 hover:fill-original-color"/>
      </WhatsappShareButton>

      <TwitterShareButton url={shareUrl} quote={quote} hashtag={"#eclate"}>
        <TwitterIcon size={35}  className="rounded-[50%] hover:filter-none opacity-80 hover:opacity-100 fill-neutral-600 hover:fill-original-color"/>
      </TwitterShareButton>

      <InstapaperShareButton url={shareUrl} quote={quote} hashtag={"#eclate"}>
        <InstapaperIcon size={35}  className="rounded-[50%] hover:filter-none opacity-80 hover:opacity-100 fill-neutral-600 hover:fill-original-color"/>
      </InstapaperShareButton>

      <RedditShareButton url={shareUrl} quote={quote} hashtag={"#eclate"}>
        <RedditIcon size={35}  className="rounded-[50%] hover:filter-none opacity-80 hover:opacity-100 fill-neutral-600 hover:fill-original-color"/>
      </RedditShareButton>
    </div>
  );
};

export default ShareComponent;
