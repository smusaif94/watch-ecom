/**
 * ABOUT PAGE - Influencer background and brand story
 *
 * Purpose:
 * - Share influencer's journey and brand story
 * - Display awards, mentions, and contact info
 *
 * Features to Add:
 * - Hero section with influencer photo
 * - Brand timeline/story
 * - Awards and media mentions
 * - Contact information
 */

const About = () => {
  // TODO: Add influencer bio, brand story, awards, and contact info
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">About the Brand</h2>
      <div className="mb-6">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Influencer" className="w-32 h-32 object-cover rounded-full mb-2" />
        <h3 className="text-lg font-semibold">Influencer Name</h3>
        <p className="text-gray-700">Award-winning watch influencer and founder of the brand.</p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Brand Story</h3>
        <p className="text-gray-700">Our journey began with a passion for luxury watches and a vision to bring exclusive timepieces to enthusiasts across India...</p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Awards & Mentions</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Best Luxury Watch Brand 2024</li>
          <li>Featured in Vogue India</li>
          <li>Instagram 1M+ followers</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Contact Information</h3>
        <p className="text-gray-700">Email: info@watchbrand.com</p>
        <p className="text-gray-700">Instagram: @watchbrand</p>
      </div>
    </div>
  );
};

export default About;
