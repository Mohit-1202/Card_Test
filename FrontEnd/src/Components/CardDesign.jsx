import { useUser } from '../Context/UserContext';

function CardDesign() {
  const { user } = useUser(); // users: array of user objects

  if (!user || user.length === 0) return <p>No users found</p>;

  return (
    <div className='card-container flex flex-wrap justify-center'>
      {user.map((user, index) => (
        <div key={index} className="cards w-[500px] bg-white flex m-3 p-3 rounded-md">
          <div className="first-section bg-gradient-to-b from-[#FBB2B4] to-[#FCE6E2] p-10 rounded-l-2xl">
            <div className="user-image">
              <img className="w-30" src="https://dhoomindia.com/assets/user2.png" alt="User" />
            </div>
          </div>

          <div className="second-section ml-5 p-5">
            <div className="user-name text-4xl">
              <span className="text-gray-800">{user.name}</span>
              <span>
                <i className="bi bi-pencil-square ml-7 text-xl text-[#7ab6f7] cursor-pointer"></i>
              </span>
            </div>
            <div className="user-email mt-5">
              <span><i className="bi bi-envelope-at text-gray-800"></i></span>
              <span className="ml-2 font-semibold text-[#5a5e5e]">{user.email}</span>
            </div>
            <div className="user-address">
              <span><i className="bi bi-geo-alt text-gray-800"></i></span>
              <span className="ml-2 text-[#5a5e5e] font-semibold">{user.location}</span>
            </div>
            <div className="user-phone">
              <span><i className="bi bi-telephone text-gray-800"></i></span>
              <span className="ml-2 text-[#5a5e5e] font-semibold">{user.phone}</span>
            </div>
            <div className="user-site">
              <a href={user.site || "#"} target="_blank" rel="noopener noreferrer">
                <span><i className="bi bi-globe text-gray-800"></i></span>
                <span className="ml-2 text-[#7ab6f7] font-semibold">{user.site}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDesign;
