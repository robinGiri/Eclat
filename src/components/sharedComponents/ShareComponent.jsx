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
    <div className="flex justify-between w-56 py-2">
      <FacebookShareButton url={shareUrl} quote={quote} hashtag={"#eclate"}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <WhatsappShareButton url={shareUrl} quote={quote} hashtag={"#eclate"}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>

      <TwitterShareButton url={shareUrl} quote={quote} hashtag={"#eclate"}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <InstapaperShareButton url={shareUrl} quote={quote} hashtag={"#eclate"}>
        <InstapaperIcon size={40} round={true} />
      </InstapaperShareButton>

      <RedditShareButton url={shareUrl} quote={quote} hashtag={"#eclate"}>
        <RedditIcon size={40} round={true} />
      </RedditShareButton>
    </div>
  );
};

export default ShareComponent;
