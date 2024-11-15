import Sidebar from "../../components/Sidebar";

const Home = () => {
    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden bg-gray-100 bg-clip-padding backdrop-filter p-6">
            <Sidebar />
            {/* <MessageContainer /> */}
        </div>
    );
};

export default Home;