import TwitterStats from "../components/twitter-stats";
import InstagramStats from "../components/instagram-stats";
import YouTubeStats from "../components/youtube-stats";

export default function Home() {
  return (
    <div className="p-8">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Dashboard</h3>

      <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-3">
        <TwitterStats />
        <YouTubeStats />
        <InstagramStats />
      </div>
    </div>
  );
}
