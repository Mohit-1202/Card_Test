import { useUser } from '../Context/UserContext';
import ShimmerUi from './Shimmer';

function CardDesign() {
  const { user } = useUser();

  if (!user || user.length === 0) return <ShimmerUi />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d3d9e0] px-4">
      <div className="card-container flex flex-wrap justify-center gap-6 max-w-7xl">
        {user.map((user, index) => (
          <div
            key={index}
            className="cards w-[500px] bg-white flex m-3 p-5 rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <div className="first-section bg-gradient-to-b from-[#FBB2B4] to-[#FCE6E2] p-10 rounded-l-2xl">
              <div className="user-image">
                <img
                  className="w-30"
                  src="https://dhoomindia.com/assets/user2.png"
                  alt="User"
                />
              </div>
            </div>

            <div className="second-section ml-5 p-5">
              <div className="user-name text-4xl flex items-center">
                <span className="text-gray-800">{user.name}</span>
                <i className="bi bi-pencil-square ml-3 text-xl text-[#7ab6f7] cursor-pointer"></i>
              </div>
              <div className="user-email mt-5">
                <i className="bi bi-envelope-at text-gray-800"></i>
                <span className="ml-2 font-semibold text-[#5a5e5e]">{user.email}</span>
              </div>
              <div className="user-address">
                <i className="bi bi-geo-alt text-gray-800"></i>
                <span className="ml-2 text-[#5a5e5e] font-semibold">{user.location}</span>
              </div>
              <div className="user-phone">
                <i className="bi bi-telephone text-gray-800"></i>
                <span className="ml-2 text-[#5a5e5e] font-semibold">{user.phone}</span>
              </div>
              <div className="user-site">
                <a href={user.site || "#"} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-globe text-gray-800"></i>
                  <span className="ml-2 text-[#7ab6f7] font-semibold">{user.site}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardDesign;
