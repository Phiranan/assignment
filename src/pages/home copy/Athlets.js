import footballer from '../../footballer.png';

const Athlets = () => {
    return (
        <div>
            <div className="footballer-desktops footballer-tablets">
                <img src={footballer} />
            </div>
            <div className="bg-white">
                <div className="content-1">
                    <p className="title">ATHLETS</p>
                    <div className="flex items-center">
                        <span className="text-black number-purple text-2xl">01</span>
                        <span className="sub-title pl-4">CONNECTION</span>
                    </div>
                    <p className="text-black detail">Connect with coaches directly, you can ping coaches to view profile.</p>
                </div>
            </div>
            <div className="bg-gray">
                <div className="content-1">
                    <div className="flex items-center">
                        <span className="text-black number-purple text-2xl">02</span>
                        <span className="sub-title pl-4">COLLABORATION</span>
                    </div>
                    <p className="text-black detail">Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
                </div>
            </div>
            <div className="bg-purple">
                <div className="content-1">
                    <div className="flex items-center">
                        <span className="text-black number-white text-2xl">03</span>
                        <span className="sub-title pl-4">GROWTH</span>
                    </div>
                    <p className="detail">Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc </p>
                </div>
            </div>
        </div>

    );
};

export default Athlets;
