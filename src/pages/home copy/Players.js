import basketball from '../../basketball.png';

const Players = () => {
    return (
        <div>
            <div className="basketball-desktops basketball-tablets">
                <img src={basketball} />
            </div>
            <div className="bg-white">
                <div className="content-2">
                    <p className="title">PLAYERS</p>
                    <div className="flex items-center">
                        <span className="text-black number-purple text-2xl">01</span>
                        <span className="sub-title pl-4">CONNECTION</span>
                    </div>
                    <p className="text-black detail">Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.</p>
                </div>
            </div>
            <div className="bg-gray">
                <div className="content-2">
                    <div className="flex items-center">
                        <span className="text-black number-purple text-2xl">02</span>
                        <span className="sub-title pl-4">COLLABORATION</span>
                    </div>
                    <p className="text-black detail">Work with recruiter to increase your chances of findingtalented athlete.</p>
                </div>
            </div>
            <div className="bg-navyblue">
                <div className="content-2">
                    <div className="flex items-center">
                        <span className="text-black number-purple-white text-2xl">03</span>
                        <span className="sub-title pl-4">GROWTH</span>
                    </div>
                    <p className="detail text-white">Save your time, recruit proper athlets for your team.</p>
                </div>
            </div>
        </div>
    );
};

export default Players;
